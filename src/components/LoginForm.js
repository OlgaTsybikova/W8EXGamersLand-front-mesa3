const LoginForm = () => {
  return (
    <div className="login-page">
      <form className="login-form">
        <div className="label-wrapper">
          <label htmlFor="username">username</label>
          <div>
            <input id="username" type="username" autoComplete="off" required />
          </div>
        </div>

        <div className="label-wrapper">
          <label htmlFor="password">password</label>
          <div>
            <input id="password" type="password" autoComplete="off" required />
          </div>
        </div>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

module.exports = LoginForm;
