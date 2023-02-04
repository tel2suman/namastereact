
import React from "react";

import { useContext } from "react";

import UserContext from "../utils/UserContext";

const Footer = () => {
    const {user} = useContext(UserContext);
    return (
      <React.Fragment>
<section className="bg-amber-500">
    <div className="max-w-screen-xl px-4 py-4 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center mt-4 space-x-6">
            <a href="#" className="text-white hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">  </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"></svg>
            </a>
            <a href="#" className="text-white hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"></svg>
            </a>
            <a href="#" className="text-white hover:text-gray-500">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"></svg>
            </a>
            <a href="#" className="text-white hover:text-gray-500">
                <span className="sr-only">Dribbble</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"></svg>
            </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-white">
            © {new Date().getFullYear()} {user.company}, Inc. All rights reserved by {user.name}.
        </p>
    </div>
</section>
      </React.Fragment>
      
    );
  };

export default Footer;