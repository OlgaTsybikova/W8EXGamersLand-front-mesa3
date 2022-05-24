import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import GamesPage from "./GamesPage";

describe("Given A GamePage component", () => {
  describe("When it render the button in to the document", () => {
    test("Then it should the button its the same to 1", () => {
      render(
        <BrowserRouter>
          <Provider store={{ ...store }}>
            <GamesPage />
          </Provider>
        </BrowserRouter>
      );

      const expectedResult = screen.getByText("Logout");

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
