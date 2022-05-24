import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
  name: "games",
  initialState: [],
  reducers: {
    loadGames: (games, action) => [...action.payload],
  },
});
export const { loadGames: loadGamesActionCreator } = gamesSlice.actions;

export default gamesSlice.reducer;
