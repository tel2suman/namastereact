
//with basic javascript

// const heading = document.createElement("h1");

//     heading.innerHTML = "hello world from react js";

//     const root = document.getElementById("root");

//     root.appendChild(heading);

//With react dom

const heading4 = React.createElement(
        
    "h4", 
        {
            id: "title",
        }, 
        
        "hello react js its heading 4"
    );

    const heading5 = React.createElement(
        
    "h5",

        {
            id: "title",
        }, 
        
        "hello react js its heading 5"
    );

    const heading6 = React.createElement(
        
        "h6", 
        
            {
                id: "title",
            }, 
            
            "hello react js its heading 6"
        );
    

    const container = React.createElement(
        
        "div",
        
        {
            id: "container",
        },
            [heading4, heading5, heading6]

        );

    console.log(heading4);

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(container);
     