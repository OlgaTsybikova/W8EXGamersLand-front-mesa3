import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerThunk } from "../../redux/thunks/userThunks";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = () => {
  const initialForm = {
    name: "",
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialForm);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateData = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const register = (event) => {
    event.preventDefault();

    dispatch(registerThunk(formData));
    setFormData(initialForm);
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/games");
    }
  };

  return (
    <RegisterFormStyled>
      <form className="login-form" autoComplete="off" noValidate>
        <div className="login-form__wrapper">
          <label className="login-form__label" htmlFor="name">
            Name
            <input
              className="login-form__input"
              type="text"
              id="name"
              value={formData.name}
              onChange={updateData}
              placeholder="Name"
            />
          </label>
          <label className="login-form__label" htmlFor="username">
            Username
            <input
              className="login-form__input"
              type="text"
              id="username"
              value={formData.username}
              onChange={updateData}
              placeholder="Username"
            />
          </label>
          <label className="login-form__label" htmlFor="password">
            Password
            <input
              className="login-form__input"
              type="password"
              id="password"
              value={formData.password}
              onChange={updateData}
              placeholder="Password"
            />
          </label>
          <button
            className="login-form__button"
            type="submit"
            onClick={register}
          >
            Register
          </button>
          <p>Do you have an account?</p>
          <Link className="" to={"/login"}>
            Click here to log in
          </Link>
        </div>
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
