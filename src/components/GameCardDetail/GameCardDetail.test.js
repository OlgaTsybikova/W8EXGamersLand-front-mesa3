import { render, screen } from "@testing-library/react";
import GameCardDetail from "./GameCardDetail";

describe("Given a GameCardDetail Component", () => {
  describe("When it is instantiated", () => {
    test("Then it should create six li elements", () => {
      const gameListTest = [
        {
          platform: "pc",
          type: "rol",
          releaseYear: "2020",
          description: "que es esto maicol?",
          score: 5,
          played: true,
        },
      ];

      render(<GameCardDetail game={gameListTest} />);

      const expectedNumOfList = 6;
      const totalList = screen.getAllByRole("listitem");

      expect(totalList.length).toBe(expectedNumOfList);
    });
  });
});
