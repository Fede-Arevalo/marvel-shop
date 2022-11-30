import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
// import Logo from "../Header/logo-white.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="menu">
          <span>MARVEL-SHOP™</span>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/cart">Cart</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;