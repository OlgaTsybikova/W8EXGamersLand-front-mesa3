import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import GamesPage from "./GamesPage";

describe("Given an Games Page Component", () => {
  describe("When it is instantiated", () => {
    test("Then it should render an h1 with the text 'This are all your games'", () => {
      render(
        <BrowserRouter>
          <Provider store={{ ...store }}>
            <GamesPage />
          </Provider>
        </BrowserRouter>
      );
      const h1 = screen.getByRole("heading", { level: 1 });
      const texth1 = screen.getByText("This are all your games");
      expect(h1).toBe(texth1);
    });
  });
});
