import { formatDate, formatDateAndTime } from "@/lib/date";
import { setFilePath } from "@/lib/media";
import { formatPrice, toPersian } from "@/lib/number";
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

export const productColumns = [
  {
    field: "media",
    headerName: "عکس",
    width: 120,
    renderCell: (params) => {
      const image = params.row.media[0] || {};

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
    field: "title",
    headerName: "نام محصول",
    width: 200,
  },
  {
    field: "price",
    headerName: "قیمت",
    width: 100,
    valueGetter: (price) => formatPrice(price),
  },
  {
    field: "stock",
    headerName: "موجودی در انبار",
    width: 100,
    valueGetter: (stock) => formatPrice(stock),
  },
  {
    field: "soldNumber",
    headerName: "تعداد فروش",
    width: 100,
    valueGetter: (soldNumber) => formatPrice(soldNumber),
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

export const customerColumns = [
  {
    field: "firstName",
    headerName: "نام",
    width: 140,
    renderCell: (params) => {
      const firstName = params.row.firstName;
      const lastName = params.row.lastName;

      return `${firstName} ${lastName}`;
    },
  },

  {
    field: "phone",
    headerName: "شماره تلفن",
    width: 160,
    valueGetter: (phone) => toPersian(phone),
  },

  { field: "email", headerName: "ایمیل", width: 250 },

  {
    field: "birthdate",
    headerName: "تولد",
    width: 180,
    valueGetter: (birthdate) => formatDate(birthdate) || "",
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
