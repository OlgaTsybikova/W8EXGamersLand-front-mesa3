import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When the two inputs username and password fields have text and the submit button is clicked", () => {
    test("Then it should allow the user to submit their crendentials", () => {
      const submit = jest.fn();

      render(<LoginForm />);

      const usernameField = screen.getByLabelText(/username/);
      const passwordField = screen.getByLabelText(/password/);
      const submitButton = screen.getByText("Log In");

      userEvent.type(usernameField, "usertest");
      userEvent.type(passwordField, "password");
      userEvent.click(submitButton);

      expect(submit).toBeCalledWith({
        username: "usertest",
        password: "password",
      });
    });
  });
});
