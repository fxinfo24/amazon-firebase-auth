import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="formContainer">
      <h3 className="formTitle">Log In</h3>
      <form action="">
        <div className="formControl">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="formControl">
          <label htmlFor="pass">Password</label>
          <input type="password" name="pass" id="" required />
        </div>
        <button className="logInBtn" type="submit">
          Log In
        </button>
        <p>
          New to Ema-john? <Link to="/register">Create New Account</Link>
        </p>
      </form>
      <button className="googleLogIn" type="submit">
        Continue With Google
      </button>
    </div>
  );
};

export default Login;
