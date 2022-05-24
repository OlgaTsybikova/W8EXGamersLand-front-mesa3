import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import DetailPage from "./DetailPage";

describe("Given an DetailPage Component", () => {
  describe("When it is instantiated", () => {
    test("Then it should render an h2 and a image", () => {
      render(
        <BrowserRouter>
          <Provider store={{ ...store }}>
            <DetailPage />
          </Provider>
        </BrowserRouter>
      );
      const h2 = screen.getByRole("heading", { level: 2 });
      const image = screen.getByRole("img");
      expect(h2).toBeInTheDocument();
      expect(image).toBeInTheDocument();
    });
  });
});
