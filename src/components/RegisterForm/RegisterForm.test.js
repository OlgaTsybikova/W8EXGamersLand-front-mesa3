import { render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

describe("Given the RegisterForm component", () => {
  describe("When it's called", () => {
    test("Then it should render a form with 2 text inputs, 1 password input and 1 button", () => {
      const expectedTextInputs = 2;
      const expectedPasswordInputs = 1;
      const expectedButtons = 1;

      render(<RegisterForm />);

      const textInputs = screen.getAllByRole("textbox", { type: "text" });
      const passwordInputs = screen.getAllByLabelText("Password");
      const buttons = screen.getAllByRole("button");

      expect(textInputs).toHaveLength(expectedTextInputs);
      expect(passwordInputs).toHaveLength(expectedPasswordInputs);
      expect(buttons).toHaveLength(expectedButtons);
    });
  });
});
