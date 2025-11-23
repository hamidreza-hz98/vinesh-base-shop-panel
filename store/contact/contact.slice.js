const { createSlice } = require("@reduxjs/toolkit");
const { getAllContactForms } = require("./contact.action");

const initialState = {
  loading: false,
  contacts: {},
};

const contactSlice = createSlice({
  name: "contact",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(getAllContactForms.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllContactForms.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      })
      .addCase(getAllContactForms.rejected, (state) => {
        state.loading = false;
      }),
});

export default contactSlice.reducer
