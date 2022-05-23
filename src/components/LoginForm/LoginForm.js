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
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="label-wrapper">
          <label htmlFor="username">username</label>
          <div>
            <input
              id="username"
              type="username"
              autoComplete="off"
              required
              onChange={updateForm}
              value={formData.username}
            />
          </div>
        </div>

        <div className="label-wrapper">
          <label htmlFor="password">password</label>
          <div>
            <input
              id="password"
              type="password"
              autoComplete="off"
              required
              onChange={updateForm}
              value={formData.password}
            />
          </div>
        </div>

        <button type="submit">Log In</button>
      </form>

      <div>
        <span>Don't have an account?</span>
      </div>

      <div>
        <button type="submit">Sign Up</button>
      </div>
    </div>
  );
};

export default LoginForm;
