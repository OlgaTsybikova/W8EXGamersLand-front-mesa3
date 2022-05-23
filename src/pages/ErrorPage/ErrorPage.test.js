import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import ErrorPage from "./ErrorPage";

describe("Given an Error Page Component", () => {
  describe("When it is instantiated", () => {
    test("Then it should render an h1 with the text 'ERROR 404'", () => {
      render(
        <BrowserRouter>
          <Provider store={{ ...store }}>
            <ErrorPage />
          </Provider>
        </BrowserRouter>
      );
      const h1 = screen.getByRole("heading", { level: 1 });
      const texth1 = screen.getByText("ERROR 404");
      expect(h1).toBe(texth1);
    });
  });
});
