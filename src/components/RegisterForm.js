import { useState } from "react";

const RegisterForm = () => {
  const emptyFields = {
    name: "",
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(emptyFields);

  const updateData = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const register = (event) => {
    event.preventdefault();
  };

  return (
    <form autoComplete="off" noValidate>
      <label htmlFor="name">
        <input
          type="text"
          id="name"
          placeholder="name"
          value={formData.name}
          onChange={updateData}
        />
      </label>
      <label htmlFor="username">
        <input
          type="text"
          id="username"
          placeholder="username"
          value={formData.username}
          onChange={updateData}
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          id="password"
          placeholder="password"
          value={formData.password}
          onChange={updateData}
        />
      </label>
      <button type="submit" onClick={register}>
        Register
      </button>
    </form>
  );
};
export default RegisterForm;
