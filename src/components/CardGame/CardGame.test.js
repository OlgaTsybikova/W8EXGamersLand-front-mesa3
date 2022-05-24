import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockGames from "../../mocks/mockGames";
import store from "../../redux/store/store";
import CardGame from "./CardGame";

describe("Given a CardGame component", () => {
  describe("When its should the card whit 1 h2", () => {
    test("Then it should show the img its the same to 1", () => {
      const expectCard = 1;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CardGame game={mockGames[0]} />
          </BrowserRouter>
        </Provider>
      );

      const expectedCard = screen.getAllByRole("img");
      expect(expectedCard).toHaveLength(expectCard);
    });
  });
});
