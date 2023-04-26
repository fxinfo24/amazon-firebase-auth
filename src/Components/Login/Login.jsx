import React, { useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {

    // Call created context api items as object
    const {loginUser} = useContext(AuthContext)

    // Click handler for login
    const loginClickHandler = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const pass = form.pass.value;
        console.log(email, pass);
        loginUser(email, pass)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset()  // Reset form fields after successful login
        })
        .catch(err => {
            console.log(err);
        });
    };


  return (
    <div className="formContainer">
      <h3 className="formTitle">Log In</h3>
      <form onSubmit={loginClickHandler} action="">
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
