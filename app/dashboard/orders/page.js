import OrdersPageWrapper from "@/components/wrappers/OrdersPageWrapper";
import React from "react";

export const metadata = {
  title: "مدیریت سفارش‌ها | فروشگاه اینترنتی امیران واچ",
  robots: {
    index: false,
    follow: false,
  },
};

const page = () => {
  return <OrdersPageWrapper />;
};

export default page;
