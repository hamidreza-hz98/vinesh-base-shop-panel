import CreateOrUpdateProductPageWrapper from "@/components/wrappers/CreateOrUpdateProductPageWrapper";
import React from "react";

export const metadata = {
  title: "ایجاد / ویرایش محصول | فروشگاه اینترنتی امیران واچ",
  robots: {
    index: false,
    follow: false,
  },
};

const page = () => {
  return <CreateOrUpdateProductPageWrapper />;
};

export default page;
