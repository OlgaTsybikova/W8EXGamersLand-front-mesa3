import axios from "axios";
import { loadGamesActionCreator } from "../features/gamesSlice";
import { loadGamesThunk } from "./gamesThunks";

describe("Given the loadGamesThunk function", () => {
  describe("When it's called and receives a correct token", () => {
    test("Then should call dispatch with loadGamesActionCreator and the game received", async () => {
      const dispatch = jest.fn();
      const returnedData = { data: { games: ["CoD", "FIFA"] } };
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
