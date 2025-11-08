"use client";

import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormHelperText,
  InputAdornment,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import loginSchema from "@/validation/login.validation";
import { useDispatch } from "react-redux";
import { loginAdmin } from "@/store/admin/admin.action";
import ButtonLoader from "../common/ButtonLoader";
import useNotifications from "@/hooks/useNotifications/useNotifications";
import { useRouter } from "next/navigation";



export default function LoginForm() {
  const dispatch = useDispatch()
  const notifications = useNotifications();
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = async (data) => {
    try {
      const message = await dispatch(loginAdmin(data)).unwrap()

       notifications.show(message, {
        severity: "success",
        autoHideDuration: 3000,
      });

      router.push("/dashboard")
    } catch (error) {
       notifications.show(error || "مشکلی پیش آمد.", {
        severity: "error",
        autoHideDuration: 3000,
      });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: "100%", maxWidth: 360 }}
    >
      <Typography
        variant="h5"
        component="h2"
        sx={{ mb: 3, textAlign: "center" }}
      >
        ورود
      </Typography>

      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label="نام کاربری"
            variant="outlined"
            margin="normal"
            error={!!errors.username}
            helperText={errors.username?.message}
            sx={{
              // Label color
              "& .MuiInputLabel-root": {
                color: "white",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white", // Label color when focused
              },
              // Typed text color
              "& .MuiOutlinedInput-input": {
                color: "white",
              },
              // Outline border color
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.5)",
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "white",
                },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ color: "white" }}>
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            type="password"
            label="رمز عبور"
            variant="outlined"
            margin="normal"
            error={!!errors.password}
            helperText={errors.password?.message}
              sx={{
              // Label color
              "& .MuiInputLabel-root": {
                color: "white",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white", // Label color when focused
              },
              // Typed text color
              "& .MuiOutlinedInput-input": {
                color: "white",
              },
              // Outline border color
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.5)",
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "white",
                },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ color: "white" }}>
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 2, py: 1.5 }}
        disabled={isSubmitting}
      >
         {isSubmitting ? <ButtonLoader /> : "ورود"}
        
      </Button>

      {/* <FormHelperText sx={{ mt: 2, textAlign: "center" }}>
        رمز عبور خود را فراموش کرده‌اید؟
      </FormHelperText> */}
    </Box>
  );
}
