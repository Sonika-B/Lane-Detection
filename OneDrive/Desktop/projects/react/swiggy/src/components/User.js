import { useState,useEffect } from "react";

const User=({name})=>{
    const[count,setCount]=useState(0);
    const[count2,setCount2]=useState(10);

    useEffect(()=>{
        const timer=setInterval(()=>{
            console.log("Inside set interval");
        },1000);
        return ()=>{
            clearInterval(timer)
        };
    },[]);

    return (
        <div className="user-card">
            <h3>Count:{count}</h3>
            <h2>Count2:{count2}</h2>
            <button onClick={()=>{
                setCount(count+1);
            }}>Increase Count</button>
            <h2>Name: {name}</h2>
            <h3>Location:</h3>
            <h3>Contact:</h3>
        </div>
    );
};
export default User;