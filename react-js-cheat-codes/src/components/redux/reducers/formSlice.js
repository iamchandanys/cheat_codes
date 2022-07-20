import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

export const formSlice = createSlice({
  name: "userDetails",
  initialState: { value: { name: "", email: "" } },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default formSlice.reducer;
