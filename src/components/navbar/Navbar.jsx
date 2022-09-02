import React from "react";
import logo from "../../media/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="navbar__logo">
        <img className="navbar__menulogo" src={logo} alt="Logo"></img>
      </h3>
    </nav>
  );
};

export default Navbar;
