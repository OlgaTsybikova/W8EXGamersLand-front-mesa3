import styled from "styled-components";
import GameCardDetail from "../../components/GameCardDetail/GameCardDetail";

const DetailPageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DetailPage = () => {
  return (
    <>
      <DetailPageContainer>
        <GameCardDetail />
      </DetailPageContainer>
    </>
  );
};

export default DetailPage;
