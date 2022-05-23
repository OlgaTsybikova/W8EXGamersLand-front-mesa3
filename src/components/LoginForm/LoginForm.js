import LoginFormContainer from "./LoginFormStyled";
import { useState } from "react";

const LoginForm = () => {
  const initialForm = {
    username: "",
    password: "",
  };

  const [formData, setformData] = useState(initialForm);

  const updateForm = (event) => {
    setformData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <LoginFormContainer className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form__wrapper">
          <label className="login-form__label" htmlFor="username">
            username
          </label>

          <div className="input-wrapper">
            <input
              className="login-form__input"
              id="username"
              type="username"
              autoComplete="off"
              required
              onChange={updateForm}
              value={formData.username}
            />
          </div>
        </div>

        <div className="login-form__wrapper">
          <label className="login-form__label" htmlFor="password">
            password
          </label>
          <div>
            <input
              className="login-form__input"
              id="password"
              type="password"
              autoComplete="off"
              required
              onChange={updateForm}
              value={formData.password}
            />
          </div>
        </div>

        <button className="login-form__button" type="submit">
          Log In
        </button>
      </form>

      <div className="login-form__text">
        <span>Don't have an account?</span>
      </div>

      <div>
        <button className="login-form__button" type="submit">
          Sign Up
        </button>
      </div>
    </LoginFormContainer>
  );
};

export default LoginForm;
