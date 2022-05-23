import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    logIn: (user, action) => ({ ...action.payload }),
    register: (user, action) => ({ ...action.payload }),
  },
});
export const { logIn: loginActionCreator, register: registerActionCreator } =
  userSlice.actions;

export default userSlice.reducer;
