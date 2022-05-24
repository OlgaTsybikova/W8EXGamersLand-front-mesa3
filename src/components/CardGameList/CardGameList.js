import { useSelector } from "react-redux";
import CardGame from "../CardGame/CardGame";

const CardGameList = () => {
  const games = useSelector((state) => state.games);

  return (
    <div className="game-container">
      <ul>
        {games.map((game) => {
          return (
            <li key={games.id}>
              <CardGame game={game} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardGameList;
