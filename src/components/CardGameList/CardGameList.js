import CardGame from "../CardGame/CardGame";

const CardGameList = (games) => {
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
