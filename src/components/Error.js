
import React from "react";

import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();
    //console.log(err);
    return(
        <React.Fragment>
            <div className="main">
                <div className="fof">
                    <h1>Oops! {err.status} went wrong.....</h1>
                    <p>{err.statusText}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Error;