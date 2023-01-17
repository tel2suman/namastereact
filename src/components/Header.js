
import React from "react";

import navlogo from "../../images/navbar-logo.png";

import bootstrapicons from "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

import { useState } from "react";

const Header = () => {

  const [title, setTitle] = useState("Login / Signup");

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
            <button className="btn btn-login" onClick={()=>{
              setTitle("Logout");
            }}>{title}
            </button>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;