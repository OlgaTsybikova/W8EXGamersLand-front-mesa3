import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "../../redux/store/store";
import LoginForm from "./LoginForm";

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
});
