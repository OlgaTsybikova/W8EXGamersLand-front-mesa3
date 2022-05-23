import styled from "styled-components";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const RegisterPage = () => {
  return (
    <RegisterPageContainer>
      <RegisterForm />
    </RegisterPageContainer>
  );
};
export default RegisterPage;
