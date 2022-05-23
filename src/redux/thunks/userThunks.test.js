import "../../mocks/server";
import {
  loginActionCreator,
  registerActionCreator,
} from "../features/userSlice";
import { loginThunk, registerThunk } from "./userThunks";

jest.mock("jwt-decode", () => () => ({ username: "Marian" }));

describe("Given a loginThunk function", () => {
  describe("When it is called", () => {
    test("It should dispatch loginActionCreator with the data from the token", async () => {
      const dispatch = jest.fn();

      const expectedData = {
        username: "Marian",
      };
      const userData = {
        username: "Marian",
        password: "password",
      };

      const expectedAction = loginActionCreator(expectedData);

      const thunk = loginThunk(userData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given a registerThunk function", () => {
  describe("When it is called", () => {
    test("It should call the API with a post method containing the user", async () => {
      const dispatch = jest.fn();

      const expectData = {
        username: "marianlop",
        id: "1",
      };

      const expectedAction = registerActionCreator(expectData);

      const thunk = registerThunk({});
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
