import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
  name: "games",
  initialState: [],
  reducers: {
    loadGames: (games, action) => [...action.payload],
  },
});
export const { loadGamesActionCreator } = gamesSlice.actions;

export default gamesSlice.reducer;
