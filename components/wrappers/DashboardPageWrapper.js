"use client";

import React, { useEffect } from "react";
import PageContainer from "../common/PageContainer";
import SummaryCards from "../dashboard/DashboardSummaryCard";
import RevenueChart from "../dashboard/RevenueChart";
import { Grid } from "@mui/material";
import TopProducts from "../dashboard/TopProducts";
import { topSoldProducts, topVisitedProducts } from "@/constants/mock";
import LatestOrders from "../dashboard/LatestOrders";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { getDashboardData } from "@/store/dashboard/dashboard.action";
import QueryString from "qs";
import {
  selectDashboardData,
  selectDashboardLoading,
} from "@/store/dashboard/dashboard.selector";
import Loader from "../common/Loader";

const DashboardPageWrapper = () => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  const status = searchParams.get("status") || "processing";

  const loading = useSelector(selectDashboardLoading);
  const dashboard = useSelector(selectDashboardData);

  useEffect(() => {
    const query = QueryString.stringify({ status });

    dispatch(getDashboardData(query)).unwrap();
  }, [dispatch, searchParams]);

  if (loading || !dashboard) {
    return <Loader />;
  }

  return (
    <PageContainer title="داشبورد مدیریت فروشگاه" >
      <Grid container mt={4} spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <SummaryCards />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <RevenueChart />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <LatestOrders />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TopProducts
            title="پربازدیدترین محصولات"
            data={dashboard?.mostVisitedProducts}
            suffix="visits"
            suffixLabel="بازدید"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TopProducts
            title="پرفروش‌ترین محصولات"
            data={dashboard?.mostSoldProducts}
            suffix="soldNumber"
            suffixLabel="فروش"
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default DashboardPageWrapper;
