import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { loginThunk } from "../../redux/thunks/userThunks";
import LoginForm from "./LoginForm";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../redux/thunks/userThunks", () => ({
  loginThunk: jest.fn(),
}));

describe("Given a LoginForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should render one textbox input, one password input and two buttons", () => {
      const expectedTextInputs = 1;
      const expectedPasswordInputs = 1;
      const expectedButtons = 2;

      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      const textInputs = screen.getAllByRole("textbox", { type: "text" });
      const passwordInputs = screen.getAllByLabelText("password");
      const buttons = screen.getAllByRole("button");

      expect(textInputs).toHaveLength(expectedTextInputs);
      expect(passwordInputs).toHaveLength(expectedPasswordInputs);
      expect(buttons).toHaveLength(expectedButtons);
    });
  });
  describe("When the user click on submit button with all fields filled", () => {
    test("Then it should dispatch login Thunk", () => {
      render(
        <Provider store={{ ...store }}>
          <LoginForm />
        </Provider>
      );

      const expectedFormData = {
        username: "marianlop",
        password: "password",
      };
      const usernameField = screen.getByLabelText("username");
      const passwordField = screen.getByLabelText("password");
      const button = screen.getByText("Log In");

      userEvent.type(passwordField, "password");
      userEvent.type(usernameField, "marianlop");
      userEvent.click(button);

      expect(loginThunk).toHaveBeenCalledWith(expectedFormData);
      expect(mockDispatch).toHaveBeenCalledWith(loginThunk());
    });
  });
});
