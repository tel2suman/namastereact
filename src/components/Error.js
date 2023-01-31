
import React from "react";

import errorImage from "../../images/error.png"

import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();
    console.log(err);
    return(
        <React.Fragment>
        <div className="h-screen w-screen bg-gray-100 flex items-center">
            <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
                    <div className="w-full lg:w-1/2 mx-8">
                        <div className="text-7xl text-lime-600 font-dark font-extrabold mb-8">Oops! {err.status} went wrong.....</div>
                    <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
                    {err.statusText}
                    </p>
            </div>
                <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
                <img src={errorImage} className="error-img" alt=""/>
                </div>
            
            </div>
        </div>
        </React.Fragment>
    )
}

export default Error;