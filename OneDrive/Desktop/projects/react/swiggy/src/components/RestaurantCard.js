import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard=(props)=>{
    const resData=props;
    // console.log(resData);
    const {loggedInUser}=useContext(UserContext);
    const {cloudinaryImageId,name,cuisine,area,costForTwo,avgRating}=resData;
    return (
        <div data-testid="resCard" className="m-4 p-4 w-[300px] bg-gray-200">
            <img className="rounded-lg"src= {CDN_URL+cloudinaryImageId} /> 
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4>{cuisine}</h4>
            <h4>{area}</h4>
            <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

//higher order function
export const withPromtedLabel=(RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black text-white rounded-lg m-2 p-2">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
}


export default RestaurantCard;