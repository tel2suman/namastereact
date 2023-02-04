import React from "react";

import navlogo from "../../images/navbar-logo.png";

import bootstrapicons from "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

import { useState, useContext } from "react";

import { Link } from "react-router-dom";

import UserContext from "../utils/UserContext";


const Header = () => {

  const [loggedin, setLoggedin] = useState(false);

  const {user} = useContext(UserContext);

  return (
    <React.Fragment>
      <nav className="flex items-center justify-center flex-wrap bg-yellow-50 border-t-8 border-amber-500  p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to href="/">
            <img src={navlogo} className="w-52" alt="logo" />
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow lg:text-center">
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-lime-600 text-xl font-medium hover:text-amber-500 mr-8"
              to="/"
            >
              Home
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-lime-600 text-xl font-medium hover:text-amber-500 mr-8"
              to="/about"
            >
              About
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-lime-600 text-xl font-medium hover:text-amber-500 mr-8"
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-lime-600 text-xl font-medium hover:text-amber-500 mr-8"
              to="/faq"
            >
              Faq
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-lime-600 text-xl font-medium hover:text-amber-500 mr-8"
              to="/instamart"
            >
              Instamart
            </Link>
          </div>
          <span className="mr-3 font-sans">Hello, <b>{user.name}</b></span>
          <div>
            {loggedin ? (
              <button
                className="inline-flex items-center px-4 py-2 bg-amber-500 hover:bg-lime-600 text-white text-sm font-medium rounded-md"
                onClick={() => {
                  setLoggedin(false);
                }}
              >
                Logout
              </button>
            ) : (
              <button
                className="inline-flex items-center px-4 py-2 bg-amber-500 hover:bg-lime-600 text-white text-sm font-medium rounded-md"
                onClick={() => {
                  setLoggedin(true);
                }}
              >
                Login / Signup
              </button>
            )}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
