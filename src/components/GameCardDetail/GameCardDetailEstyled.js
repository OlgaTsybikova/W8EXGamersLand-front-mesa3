import styled from "styled-components";

export const GameCardDetailStyle = styled.div`
  .main-container {
    display: flex;
    flex-direction: column;
  }

  .game {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      text-align: center;
    }

    &__text {
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: none;
    }

    ul {
      list-style-type: none;
    }
  }
`;
