import { contactApi } from "@/constants/api.routes";
import { fetchWithAuth } from "@/lib/fetch";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllContactForms = createAsyncThunk(
  "contact/getAllContactForms",
  async (query, { rejectWithValue }) => {
    try {
      const { data } = await fetchWithAuth(contactApi(query));

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
