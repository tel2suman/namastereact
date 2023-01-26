
import React from "react";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        //Create State
        this.state = {
            userInfo: {
                name: "dummy",
                location: "dummy"
            }
        }

        console.log("Child- Constructor" + this.props.name);
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            console.log("Namaste React")
        }, 1000);
        //console.log("child - Component Did Mount");
    }

    componentDidUpdate(prevProps,prevState){
        if (this.state.count !== prevState.count || 
            this.state.count !== prevState.count) {
            {

            }
        }
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        //console.log("Component will unmount");
    }

    render() {
        //console.log("Child- render" + this.props.name);
        const {userInfo} =this.state;

        return(
            <React.Fragment>
                <div>
                    <h1>Profile Class Component</h1>
                    <h3>Name:{userInfo?.name}</h3>
                    <h4>Location:{userInfo?.location}</h4>
                    <img src={userInfo?.avatar_url} alt=""/>
                </div>
            </React.Fragment>
        );
    };
}

export default Profile;