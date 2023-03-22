import React from "react";
import "./navbar.css";

import LOGO from "../../assets/logo.avif";

import { CiUser } from "react-icons/ci";

const NavBar = () => {
  return (
    <header className="nav-bar">
      <img src={LOGO} className="logo" alt="logo" />
      <div className="login-container">
        <CiUser className="profile-logo" />

        <p className="login-text">Login / Register</p>
      </div>
    </header>
  );
};

export default NavBar;
