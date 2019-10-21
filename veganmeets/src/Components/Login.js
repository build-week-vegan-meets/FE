import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="container">
    <div className="headerlogincontainer">
      <Header />
      <div className="login-container">
        <form>
          <h3>Login</h3>
          <input
            className="login-input"
            name="username"
            id="username"
            type="text"
            placeholder="Username"
          />
          <br />
          <input
            className="login-input"
            name="password"
            id="password"
            type="password"
            placeholder="password"
          />
        </form>
        <button className="loginbtn">Log In</button>
        <p>
          Don't have an account? <span>Create one.</span>
        </p>
      </div>
      </div>
      <div className="greyspace"></div>
    </div>
  );
};

export default Login;
