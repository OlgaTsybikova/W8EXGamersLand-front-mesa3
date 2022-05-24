import StyledCard from "./CardGameStyled";

const CardGame = ({ game }) => {
  return (
    <>
      <StyledCard>
        <h2>name: {game.name} </h2>
        <img src={game.image[0]} alt="" />
        <h2>Tipo:{game.type} </h2>
        <h2>Plataforma: {game.platform}</h2>
      </StyledCard>
    </>
  );
};

export default CardGame;
