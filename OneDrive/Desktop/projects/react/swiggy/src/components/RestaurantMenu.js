// import Shimmer from "./Shimmer";
// import { useParams} from "react-router-dom";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
// import RestaurantCategory from "./RestaurantCategory";
// import {useState} from "react";

// const RestaurantMenu = ()=>{

//     const {resId}=useParams();
//     const resInfo=useRestaurantMenu(resId);
//     const [showIndex,setShowIndex]=useState(0);

//     if(resInfo===null){
//         return <Shimmer/>;
//     };
//     const temp=resInfo?.cards[0]?.card?.card?.info;
//     const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info || "-";
//     const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || "-";
//     const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.['@type']===
//     "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"); 
//     console.log(resInfo);
//     return (
//         <div>
//         <div className="text-center">
//             <h1 className="font-bold my-6 text-2xl">{name}</h1>
//             <h2 className="font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}</h2>
//             {categories?.map((category,index)=>{
//                 {console.log(index)};
//                 <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={index===showIndex ? true: false} setShowIndex={()=> setShowIndex(index)}/>
//                 {console.log(":"+index)};
//             })}
//         </div>
//         </div>
//     );
// };
// export default RestaurantMenu;
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );


  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories.map((category, index) => (
        // Controlled Component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => index===showIndex ? setShowIndex(null) : setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;