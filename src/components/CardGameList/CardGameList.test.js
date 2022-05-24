import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import CardGameList from "./CardGameList";
import store from "../../redux/store/store";
import { BrowserRouter } from "react-router-dom";

describe("Given a CardGameList component", () => {
  describe("When it's instanciatedd", () => {
    test("Then it should create one ul element", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CardGameList />
          </Provider>
        </BrowserRouter>
      );
      const listOfGames = screen.getByRole("list");

      expect(listOfGames).toBeInTheDocument();
    });
  });
});
