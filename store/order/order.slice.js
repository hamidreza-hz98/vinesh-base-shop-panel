const { createSlice } = require("@reduxjs/toolkit")
const { getAllOrders, getOrderDetails, updateOrder, createOrder } = require("./order.action")

const initialState = {
  loading: false,
  orders: {},
  order: {}
}

const orderSlice = createSlice({
  name: "order",
  initialState,

  reducers: {},

  extraReducers: builder => 
  builder
   .addCase(createOrder.pending, (state) => {
    state.loading = true
  })
  .addCase(createOrder.fulfilled, (state) => {
    state.loading = false
  })
  .addCase(createOrder.rejected, (state) => {
    state.loading = false
  })
  .addCase(getAllOrders.pending, (state) => {
    state.loading = true
  })
  .addCase(getAllOrders.fulfilled, (state, action) => {
    state.loading = false
    state.orders = action.payload
  })
  .addCase(getAllOrders.rejected, (state) => {
    state.loading = false
  })
  .addCase(getOrderDetails.pending, (state) => {
    state.loading = true
  })
  .addCase(getOrderDetails.fulfilled, (state, action) => {
    state.loading = false
    state.order = action.payload
  })
  .addCase(getOrderDetails.rejected, (state) => {
    state.loading = false
  })
  .addCase(updateOrder.pending, (state) => {
    state.loading = true
  })
  .addCase(updateOrder.fulfilled, (state) => {
    state.loading = false
  })
  .addCase(updateOrder.rejected, (state) => {
    state.loading = false
  })
})

export default orderSlice.reducer