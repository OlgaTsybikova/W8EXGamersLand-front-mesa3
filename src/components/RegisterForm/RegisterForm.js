import { useState } from "react";
import { useDispatch } from "react-redux";
import registerThunk from "../../redux/thunks/userThunks";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = () => {
  const emptyFields = {
    name: "",
    username: "",
    password: "",
  };

  const dispatch = useDispatch();

  const [formData, setFormData] = useState(emptyFields);

  const updateData = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const register = (event) => {
    event.preventdefault();
    dispatch(registerThunk(formData));
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
          />
        </label>
        <label htmlFor="username">
          Username
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={updateData}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={updateData}
          />
        </label>
        <button type="submit" onClick={register}>
          Register
        </button>
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
