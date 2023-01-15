

import React from "react";

import navlogo from "../../images/navbar-logo.png";

import bootstrapicons from "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className="topnav">
        <a href="/">
          <img src={navlogo} className="logo-image" alt="logo" />
        </a>
        <nav>
          <ul className="menu">
            <li>
              <a href="#!">Home</a>
            </li>
            <li>
              <a href="#!">About</a>
            </li>
            <li>
              <a href="#!">Contact</a>
            </li>
            <li>
              <a href="#!">Faq</a>
            </li>
            <a href="#home" className="active">
              <i className="bi bi-cart"></i>
            </a>
          </ul>
          <div className="login-btn">
            <a href="" className="btn btn-login">
              Login or Signup
            </a>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;