import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/thunks/userThunks";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = () => {
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

  return (
    <RegisterFormStyled>
      <form autoComplete="off" noValidate>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={updateData}
            placeholder="Name"
          />
        </label>
        <label htmlFor="username">
          Username
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={updateData}
            placeholder="Username"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={updateData}
            placeholder="Password"
          />
        </label>
        <button type="submit" onClick={register}>
          Register
        </button>
        <p>Do you have an account?</p>
        <Link to={"/loginpage"}>Click here to log in</Link>
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
