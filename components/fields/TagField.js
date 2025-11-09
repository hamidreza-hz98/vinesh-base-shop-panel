import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  TextField,
  Chip,
  IconButton,
  Box,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { selectTags } from "@/store/tag/tag.selector";
import { createTag, deleteTag, getAlltags } from "@/store/tag/tag.action";
import QueryString from "qs";
import useNotifications from "@/hooks/useNotifications/useNotifications";
import ClearIcon from '@mui/icons-material/Clear';

export default function TagField({ value = [], onChange }) {
  const dispatch = useDispatch();
  const { tags } = useSelector(selectTags);
  const notifications = useNotifications();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getAlltags(QueryString.stringify({ page_size: 5000 })));
  }, []);

  useEffect(() => {
  if (!tags || !value?.length) return;

  // Map over current value and replace with full tag object from `tags` if _id matches
  const updatedValue = value.map((val) => {
    if (typeof val === "string") return val; // keep new tags
    const fullTag = tags.find((t) => t._id === val._id);
    return fullTag || val;
  });

  // Only update if something changed
  const isChanged =
    updatedValue.length !== value.length ||
    updatedValue.some((v, i) => v._id !== value[i]?._id);

  if (isChanged) {
    onChange(updatedValue);
  }
}, [tags, value, onChange]);

  const removeFromSelected = (tag) => {
    onChange(value.filter((t) => t._id !== tag._id));
  };

  const removeFromDatabase = async (tag) => {
    try {
      setLoading(true);
      await dispatch(deleteTag(tag._id)).unwrap();
      notifications.show("تگ از دیتابیس حذف شد.", {
        severity: "success",
        autoHideDuration: 3000,
      });

      await dispatch(getAlltags(QueryString.stringify({ page_size: 5000 })));

      onChange(value.filter((t) => t._id !== tag._id));
    } catch (error) {
      notifications.show("خطا هنگام حذف تگ.", {
        severity: "error",
        autoHideDuration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  /** ✳️ Create new tag */
  const handleCreateTag = async (name) => {
    try {
      const { data, message } = await dispatch(createTag({ name })).unwrap();
      notifications.show(message || "برچسب ایجاد و انتخاب شد.", {
        severity: "success",
        autoHideDuration: 3000,
      });

      await dispatch(getAlltags(QueryString.stringify({ page_size: 5000 })));
      onChange([...value, data]);
    } catch (error) {
      notifications.show("مشکلی پیش آمد.", {
        severity: "error",
        autoHideDuration: 3000,
      });
    }
  };

  return (
    <Autocomplete
      multiple
      size="small"
      options={tags || []}
      value={value}
      filterSelectedOptions
      loading={loading}
      freeSolo
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option?.name
      }
      onChange={(e, newValue, reason) => {
        const latest = newValue[newValue.length - 1];
        if (reason === "createOption" && typeof latest === "string") {
          handleCreateTag(latest);
        } else {
          onChange(newValue);
        }
      }}
      renderTags={(selected, getTagProps) =>
        selected.map((option, index) => (
          <Chip
            {...getTagProps({ index })}
            label={typeof option === "string" ? option : option?.name}
            key={option._id}
            size="small"
            deleteIcon={<ClearIcon />}
            onDelete={() => removeFromSelected(option)}
          />
        ))
      }
      renderOption={(props, option) => (       
        <Box
          {...props}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant="caption" noWrap>
            {option.name}
          </Typography>

          <Tooltip title="حذف از سایت">
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                removeFromDatabase(option);
              }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="تگ ها"
          placeholder="ساختن یا انتخاب از موارد موجود"
        />
      )}
    />
  );
}
