import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    formValues: {},
    channelSettings: {},
    channelProducts: [],
  },
  reducers: {
    saveForm: (state, action) => {
      state.formValues = action.payload;
    },
    clearForm: (state, action) => {
      state.formValues = {};
      state.channelSettings = {};
      state.channelProducts = [];
    },
  },
});

export const { saveForm, clearForm } = formSlice.actions;

export default formSlice.reducer;
