import { useSelector } from "react-redux";
import CardGame from "../CardGame/CardGame";
import CardGameListStyled from "./CardGameListStyled";

const CardGameList = () => {
  const games = useSelector((state) => state.games);

  return (
    <div className="game-container">
      <CardGameListStyled>
        {games.map((game) => {
          return (
            <li key={game.id}>
              <CardGame game={game} />
            </li>
          );
        })}
      </CardGameListStyled>
    </div>
  );
};

export default CardGameList;
