import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {

    // Declare state for error
    const [ error, setError ] = useState('');

    // Call created context api items as object
    const {user, createUser} = useContext(AuthContext)

    // On submit click handler
    const handleSignUp = (event) => {
        event.preventDefault();

        // Retrieve Form data
        const form = event.target;
        const email = form.email.value;
        const pass = form.pass.value;
        const confirmPass = form.confirmPass.value;
        console.log(email, pass, confirmPass);

        // Validations
        setError('');
        
        if ( pass !== confirmPass ) {
            setError('Password did not match');
            return
        } else if (pass.length < 6){
            setError('Password must be at least 6 characters');
            return
        }

        createUser(email, pass)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        });
    };


    return (
        <div className="formContainer">
      <h3 className="formTitle">Register</h3>
      <form onSubmit={handleSignUp} action="">
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
        <p className='errorMessage'>{error}</p>
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