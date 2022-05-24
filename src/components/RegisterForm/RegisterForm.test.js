import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import { registerThunk } from "../../redux/thunks/userThunks";
import RegisterForm from "./RegisterForm";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("../../redux/thunks/userThunks", () => ({
  registerThunk: jest.fn(),
}));

describe("Given the RegisterForm component", () => {
  describe("When it's called", () => {
    test("Then it should render a form with 2 text inputs, 1 password input and 1 button", () => {
      const expectedTextInputs = 2;
      const expectedPasswordInputs = 1;
      const expectedButtons = 1;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm />
          </BrowserRouter>
        </Provider>
      );

      const textInputs = screen.getAllByRole("textbox", { type: "text" });
      const passwordInputs = screen.getAllByLabelText("Password");
      const buttons = screen.getAllByRole("button");

      expect(textInputs).toHaveLength(expectedTextInputs);
      expect(passwordInputs).toHaveLength(expectedPasswordInputs);
      expect(buttons).toHaveLength(expectedButtons);
    });
  });

  describe("When the user click on submit button with all fields filled", () => {
    test("Then it should dispatch register Thunk", () => {
      render(
        <Provider store={{ ...store }}>
          <BrowserRouter>
            <RegisterForm />
          </BrowserRouter>
        </Provider>
      );

      const expectedFormData = {
        name: "Marian",
        username: "marianlop",
        password: "password",
      };
      const nameField = screen.getByPlaceholderText("Name");
      const usernameField = screen.getByPlaceholderText("Username");
      const passwordField = screen.getByPlaceholderText("Password");
      const button = screen.getByRole("button");

      userEvent.type(nameField, "Marian");
      userEvent.type(passwordField, "password");
      userEvent.type(usernameField, "marianlop");
      userEvent.click(button);

      expect(registerThunk).toHaveBeenCalledWith(expectedFormData);
      expect(mockDispatch).toHaveBeenCalledWith(registerThunk());
    });
  });
});
