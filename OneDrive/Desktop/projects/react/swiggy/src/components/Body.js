import RestaurantCard ,{withPromtedLabel}from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);
    const [searchText,setSearchText]=useState("");
    const RestaurantCardPromted=withPromtedLabel(RestaurantCard);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        // console.log(json);
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus=useOnlineStatus();
    if(onlineStatus=== false){
        return (
            <h1>Looks like ur offline!. Turn on ur internet connection!</h1>
        )
    }
    const {loggedInUser,setUserName}=useContext(UserContext);
    return listOfRestaurant?.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" data-textid="searchInput" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 py-1 bg-green-100 m-2 rounded-lg" onClick={()=>{
                        const filteredRestaurant=listOfRestaurant.filter(
                            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <div className="filter m-4 p-4 flex items-center">
                <button className="px-4 py-1 bg-gray-100 m-2 rounded-lg"
                    onClick={() => {
                        const filteredList = listOfRestaurant.filter(
                            (res) => {
                                return parseFloat(res.info.avgRating) > 4;
                            }
                        );
                        setListOfRestaurant(filteredList);
                        console.log(filteredList);
                        console.log("vujbkn");
                    }}> Highest Rating
                </button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <label>User Name: </label>
                    <input value={loggedInUser} className="border border-solid border-black" onChange={(e)=>{setUserName(e.target.value)}} />
                </div>
            </div>
            
            <div className="flex flex-wrap" >
                {
                    filteredRestaurant?.map((restaurant) => (
                        <Link key={restaurant?.info.id} 
                        to={"/restaurants/"+restaurant?.info.id }>
                            {
                                restaurant?.info.promoted ? 
                                (<RestaurantCardPromted {...restaurant?.info} />):(
                                <RestaurantCard   {...restaurant?.info} />) 
                            }
                            </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;