import LoginForm from "../../components/LoginForm/LoginForm";
import styled from "styled-components";

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginPage = () => {
  return (
    <LoginPageContainer className="login-page">
      <LoginForm />
    </LoginPageContainer>
  );
};

export default LoginPage;
