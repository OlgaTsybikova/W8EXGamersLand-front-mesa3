import userReducer, {
  loginActionCreator,
  registerActionCreator,
} from "./userSlice";

describe("Given a usersSlice with a login reducer", () => {
  describe("When we pass a name and a password", () => {
    test("Then it should return the new state with the new user", () => {
      const initialValue = {};
      const receivedValue = { username: "marian", password: "password" };

      const action = loginActionCreator(receivedValue);
      const newState = userReducer(initialValue, action);

      expect(newState).toEqual(receivedValue);
    });
  });
});

describe("Given a usersSlice with Register reducer", () => {
  describe("When we pass a new user", () => {
    test("Then it should return the new state with the new user", () => {
      const initialValue = {};
      const receivedValue = {
        name: "Marian",
        username: "marian",
        password: "password",
      };

      const action = registerActionCreator(receivedValue);
      const newState = userReducer(initialValue, action);

      expect(newState).toEqual(receivedValue);
    });
  });
});
