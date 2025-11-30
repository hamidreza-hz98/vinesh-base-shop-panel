const { createSlice } = require("@reduxjs/toolkit");
const { getDashboardData } = require("./dashboard.action");

const initialState = {
  loading: false,
  dashboard: {},
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(getDashboardData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDashboardData.fulfilled, (state, action) => {
        state.loading = false;
        state.dashboard = action.payload;
      })
      .addCase(getDashboardData.rejected, (state) => {
        state.loading = false;
      }),
});

export default dashboardSlice.reducer
