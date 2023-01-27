
import React from "react";

import errorImage from "../../images/error.png"

import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();
    console.log(err);
    return(
        <React.Fragment>
            <div className="main">
                <div className="fof">
                    <img src={errorImage} className="error-img" alt=""/>
                    <h1>Oops! {err.status} went wrong.....</h1>
                    <p>{err.statusText}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Error;