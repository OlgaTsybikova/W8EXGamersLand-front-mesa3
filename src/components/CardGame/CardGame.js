import StyledCard from "./CardGameStyled";

const CardGame = ({ game: { name, image, type, platforms } }) => {
  return (
    <>
      <StyledCard>
        <h2>Name: {name}</h2>
        <img src={image} alt={name} />
        <h2>Type: {type} </h2>
        <h2>Plataforms: {platforms}</h2>
      </StyledCard>
    </>
  );
};

export default CardGame;
