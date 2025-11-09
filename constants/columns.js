import { formatDateAndTime } from "@/lib/date";
import { setFilePath } from "@/lib/media";
import { Box } from "@mui/material";
import Image from "next/image";

export const brandColumns = [
  {
    field: "image",
    headerName: "لوگو",
    width: 120,
    renderCell: (params) => {
      const image = params.row.logo || {};

      return (
        <Box
          display="flex"
          gap={1}
          height="100%"
          alignItems="center"
          justifyContent="center"
          padding={1}
        >
          <Image
            src={setFilePath(image.path)}
            alt={image.filename}
            unoptimized
            crossOrigin="anonymous"
            loading="lazy"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
      );
    },
  },
  {
    field: "name",
    headerName: "نام برند",
    width: 100,
  },
  {
    field: "englishName",
    headerName: "نام انگلیسی",
    width: 100,
  },
  {
    field: "visits",
    headerName: "بازدید ها",
    width: 80,
  },
  {
    field: "createdAt",
    headerName: "تاریخ ساخته شدن",
    width: 180,
    valueGetter: (createdAt) => formatDateAndTime(createdAt) || "",
  },
  {
    field: "updatedAt",
    headerName: "آخرین تغییر",
    width: 180,
    valueGetter: (updatedAt) => formatDateAndTime(updatedAt) || "",
  },
];

export const categoryColumns = [
  {
    field: "image",
    headerName: "عکس",
    width: 120,
    renderCell: (params) => {
      const image = params.row.image || {};

      return (
        <Box
          display="flex"
          gap={1}
          height="100%"
          alignItems="center"
          justifyContent="center"
          padding={1}
        >
          <Image
            src={setFilePath(image.path)}
            alt={image.filename}
            unoptimized
            crossOrigin="anonymous"
            loading="lazy"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
      );
    },
  },
  {
    field: "name",
    headerName: "نام دسته بندی",
    width: 180,
  },
  {
    field: "visits",
    headerName: "بازدید ها",
    width: 80,
  },
  {
    field: "createdAt",
    headerName: "تاریخ ساخته شدن",
    width: 180,
    valueGetter: (createdAt) => formatDateAndTime(createdAt) || "",
  },
  {
    field: "updatedAt",
    headerName: "آخرین تغییر",
    width: 180,
    valueGetter: (updatedAt) => formatDateAndTime(updatedAt) || "",
  },
];
