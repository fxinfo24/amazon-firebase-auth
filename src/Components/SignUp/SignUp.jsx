import React from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="formContainer">
      <h3 className="formTitle">Register</h3>
      <form action="">
        <div className="formControl">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="formControl">
          <label htmlFor="pass">Password</label>
          <input type="password" name="pass" id="" required />
        </div>
        <div className="formControl">
          <label htmlFor="confirmPass">Confirm Password</label>
          <input type="password" name="confirmPass" id="" required />
        </div>
        <button className="logInBtn" type="submit">
          Sign Up
        </button>
        <p>
        Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
      <button className="googleLogIn" type="submit">
        Continue With Google
      </button>
    </div>
    );
};

export default SignUp;