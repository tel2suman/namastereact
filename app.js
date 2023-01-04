
//with basic javascript

// const heading = document.createElement("h1");

//     heading.innerHTML = "hello world from react js";

//     const root = document.getElementById("root");

//     root.appendChild(heading);

//With react dom

import React from "react";

import  ReactDOM from "react-dom/client";

    //jsx

    const heading4 = (
        <h4 id="title" key="h4" className="container">
            hello react js its heading 4
        </h4>
    );

    //react component

    // functional component

    const HeaderComponent = () => {
        return (
            <div className="container">
            {heading4}
                <h3>header functional component</h3>
                <h5>hjhjkjkjllhjfdrdt</h5>
            </div>
        );
    }

    console.log(heading4);

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<HeaderComponent/>);
     