import React from 'react';
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Dummy",
                id:"0000"
            }
        };
    }
    async componentDidMount(){
        const data =await fetch("https://api.github.com/users/Sonika-B");
        const json=await data.json();
        this.timer=setInterval(()=>{
            console.log("Inside timer");
        },1000);
        this.setState({
            userInfo:json,
        });
        console.log(json);
    }
    componentDidUpdate(){
        // console.log("component did update");
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        // console.log("component will unmount");
    }
    render(){
        return (
            <div className="user-card">
                <h2>Name: {this.state.userInfo.name} </h2>
                <h3>Id:{this.state.userInfo.id}</h3>
            </div>
        );
    };
};
export default UserClass;
