import LoginFormContainer from "./LoginFormStyled";

const LoginForm = () => {
  return (
    <LoginFormContainer className="login-page">
      <form className="login-form">
        <div className="login-form__wrapper">
          <label className="login-form__label" htmlFor="username">
            username
          </label>
          <div>
            <input
              className="login-form__input"
              id="username"
              type="username"
              autoComplete="off"
              required
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
            />
          </div>
        </div>

        <button className="login-form__button" type="submit">
          Log In
        </button>
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;
