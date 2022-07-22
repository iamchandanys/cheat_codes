import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../actions/formActions";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    formValues: {},
    channelSettings: {},
    channelProducts: [],
    users: [],
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
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.users = { ...state.users, status: "pending" };
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = { value: [...action.payload], status: "fulfilled" };
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.users = { ...state.users, status: "rejected" };
    });
  },
});

export const { saveForm, clearForm } = formSlice.actions;

export default formSlice.reducer;
