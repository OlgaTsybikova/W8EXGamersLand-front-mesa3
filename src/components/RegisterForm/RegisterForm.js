import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerThunk } from "../../redux/thunks/userThunks";
import LoginFormContainer from "../LoginForm/LoginFormStyled";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const updateData = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const register = (event) => {
    event.preventDefault();
    dispatch(registerThunk(formData));
    setFormData({
      name: "",
      username: "",
      password: "",
    });
  };

  const goToLogin = () => {
    navigate("/users/login");
  };

  return (
    <LoginFormContainer>
      <form className="login-form" onSubmit={register}>
        <div className="login-form__wrapper">
          <label className="login-form__label" htmlFor="name">
            name
          </label>
          <div>
            <input
              className="login-form__input"
              id="name"
              type="text"
              autoComplete="off"
              required
              onChange={updateData}
              value={formData.name}
            />
          </div>
        </div>
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
              onChange={updateData}
              value={formData.username}
            />
          </div>
        </div>
        <div className="login-form__wrapper">
          <label className="login-form__label" htmlFor="password">
            password
          </label>

          <div className="input-wrapper">
            <input
              className="login-form__input"
              id="password"
              type="password"
              autoComplete="off"
              required
              onChange={updateData}
              value={formData.password}
            />
          </div>
        </div>

        <button className="login-form__button" type="submit">
          Sign Up
        </button>
      </form>

      <div className="login-form__text">
        <span>Already have an account?</span>
      </div>

      <div>
        <button className="login-form__button" onClick={goToLogin}>
          Login
        </button>
      </div>
    </LoginFormContainer>
  );
};

export default RegisterForm;
