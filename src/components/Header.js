import React from "react";

import navlogo from "../../images/navbar-logo.png";

import bootstrapicons from "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

import { useState, useContext } from "react";

import { Link } from "react-router-dom";

import UserContext from "../utils/UserContext";

import { useSelector } from "react-redux";

import store from "../utils/store";


const Header = () => {

  const [loggedin, setLoggedin] = useState(false);

  const {user} = useContext(UserContext);

  const cartItems = useSelector((store)=> store.cart.items);
  
  console.log(cartItems);

  return (
    <React.Fragment>
      <nav className="w-full fixed top-0 z-50 flex items-center justify-center flex-wrap bg-yellow-50 border-t-8 border-amber-500  p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to href="/">
            <img src={navlogo} className="w-52" alt="logo" />
          </Link>
        </div>
        <div className="block lg:hidden">
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        </div>
        <div className=" flex-grow hidden w-full md:block md:w-auto lg:flex lg:items-center lg:w-auto" id="navbar-default">
          <div className="text-sm lg:flex-grow lg:text-center">
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-lime-600 text-xl font-medium hover:text-amber-500 mr-8 ml-10"
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
                className="inline-flex items-center px-4 py-2 bg-amber-500 hover:bg-lime-600 text-white text-base font-medium rounded-md"
                onClick={() => {
                  setLoggedin(true);
                }}
              >
                Login / Signup
              </button>
            )}
          </div>
          <Link to="/cart">
            <i className="bi bi-bag font-bold mr-3 ml-3 text-2xl"></i> ({cartItems.length} items)
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
