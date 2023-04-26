import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {

  const {user, logOutUser} = useContext(AuthContext);
  console.log(user)

  // Handle LogOut user
  const logOutHandler = () => {
    logOutUser()
    .then((result) => {})
    .catch(error => {
      console.error(error);
    })
  }


  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to = '/register'>Register</Link>
        {
          user && <span>Welcome {user.email} <Link onClick={logOutHandler}>Log Out</Link></span>
        }
      </div>
    </nav>
  );
};

export default Header;
