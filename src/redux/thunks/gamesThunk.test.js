import axios from "axios";
import {
  loadGameActionCreator,
  loadGamesActionCreator,
} from "../features/gamesSlice";
import { loadGamesThunk, loadGameThunk } from "./gamesThunks";

describe("Given the loadGamesThunk function", () => {
  describe("When it's called and receives a correct token", () => {
    test("Then should call dispatch with loadGamesActionCreator and the game received", async () => {
      const dispatch = jest.fn();
      const returnedData = { data: ["CoD", "FIFA"] };
      axios.get = jest.fn().mockReturnValue(returnedData);
      const expectedGame = ["CoD", "FIFA"];
      const token = "correctToken";

      const expectedAction = loadGamesActionCreator(expectedGame);

      const thunk = loadGamesThunk(token);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given the loadGameThunk function", () => {
  describe("When it's called and received the id's game and a correct token", () => {
    test("Then it should dispatch with loadGameActionCreator and the game with the id received", async () => {
      const dispatch = jest.fn();
      const returnedData = { data: "FUT" };
      axios.get = jest.fn().mockReturnValue(returnedData);
      const gameId = 1;
      const token = "correctToken";
      const expectedGame = "FUT";

      const expectedAction = loadGameActionCreator(expectedGame);

      const thunk = loadGameThunk(gameId, token);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
