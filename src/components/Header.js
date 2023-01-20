
import React from "react";

import navlogo from "../../images/navbar-logo.png";

import bootstrapicons from "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

import { useState , useEffect } from "react";

import { Link } from "react-router-dom";

const Header = () => {

  const [loggedin, setLoggedin] = useState(false);

  return (
    <React.Fragment>
      <div className="topnav">
        <Link to href="/">
          <img src={navlogo} className="logo-image" alt="logo" />
        </Link>
        <nav>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to ="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/faq">Faq</Link>
            </li>
            <a href="#home" className="active">
              <i className="bi bi-cart"></i>
            </a>
          </ul>
          <div className="login-btn">
          { loggedin ?
            <button className="btn btn-login" onClick={()=>{setLoggedin(false)}}>Logout</button> :
            <button className="btn btn-login" onClick={()=>{setLoggedin(true)}}>Login / Signup</button>
          }
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;