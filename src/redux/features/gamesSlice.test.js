import gamesReducer, {
  loadGameActionCreator,
  loadGamesActionCreator,
} from "./gamesSlice";

describe("Given a usersSlice with a load games reducer", () => {
  describe("When we pass a list of games", () => {
    test("Then it should return the new state with games", () => {
      const initialValue = [];
      const receivedValue = [{ name: "test", platform: "test", image: "test" }];

      const action = loadGamesActionCreator(receivedValue);
      const newState = gamesReducer(initialValue, action);

      expect(newState).toEqual(receivedValue);
    });
  });
});

describe("Given a usersSlice with a load game reducer", () => {
  describe("When we pass a games", () => {
    test("Then it should return the new state with a game", () => {
      const initialValue = [];
      const receivedValue = [{ name: "test", platform: "test", image: "test" }];

      const action = loadGameActionCreator(receivedValue);
      const newState = gamesReducer(initialValue, action);

      expect(newState).toEqual(receivedValue);
    });
  });
});
