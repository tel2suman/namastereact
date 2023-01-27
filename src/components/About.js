 
 import React from "react";

 import { Outlet } from "react-router-dom";

 import Profile from "./ProfileClass";

 import ProfileFunction from "./Profile";

 import { Component } from "react";

    class About extends Component {

        constructor(props){
            super(props);
            //console.log("parent- constructor");
        }

        componentDidMount(){
            //API Calls

        }

        render(){
            //console.log("parent- render");
            return(
                <React.Fragment>
                    <div>
                        <h2>About US page</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        {/* <Profile name={"FirstChildClass"}/> */}
                        {/* <Profile name={"SecondChildClass"}/> */}
                        <Profile/>
                    </div>
                </React.Fragment>
            );
        };
    }
 
 export default About;
 
