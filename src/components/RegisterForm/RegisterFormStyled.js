import styled from "styled-components";

const RegisterFormStyled = styled.div`
  > form {
    display: flex;
    flex-direction: column;
    align-items: center;

    > label {
      display: flex;
      flex-direction: column;
      align-items: center;

      > input {
        border-radius: 5px;
        font-size: 20px;
      }
    }

    > button {
      margin-top: 10px;
      border-radius: 5px;
      font-size: 20px;
    }
  }
`;
export default RegisterFormStyled;
