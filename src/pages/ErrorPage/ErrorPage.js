import styledComponents from "styled-components";

const ErrorPageStyled = styledComponents.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;


`;

const ErrorPage = () => {
  return (
    <>
      <ErrorPageStyled>
        <h1>ERROR 404</h1>
        <h2>PAGE NOT FOUND</h2>
      </ErrorPageStyled>
    </>
  );
};

export default ErrorPage;
