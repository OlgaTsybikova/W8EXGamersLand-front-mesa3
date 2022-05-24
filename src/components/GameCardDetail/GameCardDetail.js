import { GameCardDetailStyle } from "./GameCardDetailEstyled";

const GameCardDetail = () => {
  return (
    <GameCardDetailStyle>
      <div className="main-container">
        <div className="game">
          <div className="game__image-container">
            <img className="game__image" src="" alt="" />
          </div>
          <div className="game__text">
            <h2>name</h2>
            <ul>
              <li>
                <div className="game__text--title">Platform: </div>
                <div className="game__text--detail"></div>
              </li>
              <li>
                <div className="game__text--title">Type: </div>
                <div className="game__text--detail"></div>
              </li>
              <li>
                <div className="game__text--title">Release Year: </div>
                <div className="game__text--detail"></div>
              </li>
              <li>
                <div className="game__text--title">Description: </div>
                <div className="game__text--detail"></div>
              </li>
              <li>
                <div className="game__text--title">Score: </div>
                <div className="game__text--detail"></div>
              </li>
              <li>
                <div className="game__text--title">Played: </div>
                <div className="game__text--detail"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </GameCardDetailStyle>
  );
};

export default GameCardDetail;
