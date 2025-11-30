import CreateOrUpdateCategoryPageWrapper from "@/components/wrappers/CreateOrUpdateCategoryPageWrapper";
import React from "react";

export const metadata = {
  title: "ایجاد / ویرایش دسته‌بندی | فروشگاه اینترنتی امیران واچ",
  robots: {
    index: false,
    follow: false,
  },
};

const page = () => {
  return <CreateOrUpdateCategoryPageWrapper />;
};

export default page;
