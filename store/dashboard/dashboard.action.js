import { dashboardApi } from "@/constants/api.routes";
import { fetchWithAuth } from "@/lib/fetch";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDashboardData = createAsyncThunk(
  "dashboard/getDashboardData",
  async (query, { rejectWithValue }) => {
    try {
      const { data } = await fetchWithAuth(dashboardApi(query));

      return data;
    } catch (error) {
      return rejectWithValue(error.message || "مشکلی پیش آمد.");
    }
  }
);
