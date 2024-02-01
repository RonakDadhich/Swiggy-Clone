// import { useState } from "react";
// import ItemList from "./ItemList";

// const RestaurantCategory = ({data, showItems, setShowIndex, dummy}) => {

//     // const[showItems, setShowItems] = useState(false);
    
//     const handleClick = () => {
//       setShowIndex();
//     };
//     return (
//     <div>
//         {/* Header */}
//         <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
//             <div className="flex justify-between cursor-pointer" onClick={handleClick}>
//             <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
//             <span>🔽</span>
//             </div>
//         {showItems && <ItemList items = {data.itemCards} dummy={dummy}/>}
//         </div>
//     </div>
//     )
// }

// export default RestaurantCategory;

import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Header */}
      <div className="w-full lg:w-6/12 md:w-12/12 sm:w-12/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
