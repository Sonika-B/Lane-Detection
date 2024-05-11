import UserContext from "../utils/UserContext";
import User from "./User";
// import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor");
    }
    componentDidMount() {
        console.log("Parent component did mount");
    }
    render() {
        console.log("Parent render");
        return (
            <div>
                <h1>About Page</h1>
                <div>
                    LoggedInUser
                    <UserContext.Consumer>
                        {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <User name={"first"} />
                <User name={"second"} />
            </div>
        );
    }
}


export default About;