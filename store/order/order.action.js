import { modifyOrderApi, orderApi } from "@/constants/api.routes";
import { fetchWithAuth } from "@/lib/fetch";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (body, { rejectWithValue }) => {
    try {
      const { message } = await fetchWithAuth(orderApi, {
        method: "POST",
        body,
      });

      return  message ;
    } catch (error) {
      return rejectWithValue(error.message || "مشکلی پیش آمد.");
    }
  }
);

export const getAllOrders = createAsyncThunk(
  "order/getAllOrders",
  async (query, { rejectWithValue }) => {
    try {
      const { data } = await fetchWithAuth(orderApi, {
        query,
      });

      return data
    } catch (error) {
      return rejectWithValue(error.message || "مشکلی پیش آمد.");
    }
  }
);

export const getOrderDetails = createAsyncThunk(
  "order/getOrderDetails",
  async (_id, { rejectWithValue }) => {
    try {
      const { data } = await fetchWithAuth(modifyOrderApi(_id));

      return data;
    } catch (error) {
      return rejectWithValue(error.message || "مشکلی پیش آمد.");
    }
  }
);

export const updateOrder = createAsyncThunk(
  "order/updateOrder",
  async ({ _id, body }, { rejectWithValue }) => {
    try {
      const { message } = await fetchWithAuth(modifyOrderApi(_id), {
        method: "PUT",
        body,
      });

      return message;
    } catch (error) {
      return rejectWithValue(error.message || "مشکلی پیش آمد.");
    }
  }
);
