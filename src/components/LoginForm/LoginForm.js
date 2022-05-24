import LoginFormStyled from "./LoginFormStyled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/thunks/userThunks";

const LoginForm = () => {
  const initialForm = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const dispatch = useDispatch();

  const updateForm = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(loginThunk(formData));
    setFormData(initialForm);
  };

  return (
    <LoginFormStyled className="login-page">
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
    </LoginFormStyled>
  );
};

export default LoginForm;
