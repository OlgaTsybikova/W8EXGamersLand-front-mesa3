import styled from "styled-components";

const RegisterFormStyled = styled.div`
  border: 1px solid red;
  > form {
    display: flex;
    flex-direction: column;
    align-items: center;

    & input {
      border-radius: 5px;
    }

    > button {
      margin-top: 10px;
      border-radius: 5px;
    }
  }
`;
export default RegisterFormStyled;
