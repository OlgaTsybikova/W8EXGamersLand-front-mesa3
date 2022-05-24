import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store/store";

describe("Given an App conponent", () => {
  describe("When invoked with the heading text 'GamersLand'", () => {
    test("Then it should render a h1 element with the text 'GamersLand'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const text = "GamersLand";
      const expectedtext = screen.getByText(text);
      expect(expectedtext).toBeInTheDocument();
    });
  });
});
