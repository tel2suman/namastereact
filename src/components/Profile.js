 import React from "react";

 import { useState , useEffect } from "react";

 const Profile = (props) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        //API Call
        const timer = setInterval(() => {
            console.log("Namaste React")
        }, 1000);

        console.log("useEffect");

        return() => {
            clearInterval(timer);
            console.log("useEffect Retuns");
        }
        
    }, []);

    console.log("render");

   

    //console.log("render function component")

    return(
        <React.Fragment>
            <h3>Profile components</h3>
            <h4>Name:{props.name}</h4>
            <h4>Count: {count}</h4>
            <button className="btn btn-login" onClick={()=>setCount(1)}>Count</button>
        </React.Fragment>
    )
}

export default Profile;