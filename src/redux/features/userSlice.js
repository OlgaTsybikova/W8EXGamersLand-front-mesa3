import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    logIn: (user, action) => ({ ...action.payload }),
    register: (user, action) => ({ ...action.payload }),
    logout: (user, action) => ({}),
  },
});
export const {
  logIn: loginActionCreator,
  register: registerActionCreator,
  logout: logoutActionCreator,
} = userSlice.actions;

export default userSlice.reducer;
