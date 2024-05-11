// import ItemList from "./ItemList"

// const RestaurantCategory = ({ data, showItems ,setShowIndex}) => {
//     console.log("inside categpry");
//     const handleClick=()=>{
//         setShowIndex();
//     };
//     return (
//         <div>
//             <div className="w-6/12 mx-auto my-4 bg-gray-50 p-4 shadow-lg ">
//                 <div className="flex justify-between cursor-pointer" onClick={handleClick}>
//                     <span className="font-bold text-lg">{data?.title} ({data?.itemCards?.length})</span>
//                     <span>v</span>
//                 </div>
//                 {showItems && <ItemList data={data?.itemCards} />}
//             </div>
//         </div>
//     );
// };
// export default RestaurantCategory;
import ItemList from './ItemList';

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/*Accordion Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* Accordion Body */}

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;