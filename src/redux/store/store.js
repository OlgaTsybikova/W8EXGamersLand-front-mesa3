import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "../features/gamesSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    games: gamesReducer,
  },
});

export default store;
