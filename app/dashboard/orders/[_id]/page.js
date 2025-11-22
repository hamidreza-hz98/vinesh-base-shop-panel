import OrderDetailsPageWrapper from "@/components/wrappers/OrderDetailsPageWrapper";
import React from "react";

const page = async ({ params }) => {
  const { _id } = await params;

  return <OrderDetailsPageWrapper _id={_id} />;
};

export default page;
