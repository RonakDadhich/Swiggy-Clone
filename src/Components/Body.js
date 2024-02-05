// import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
// import { useState, useEffect,  } from "react";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../Utils/useOnlineStatus";
// // import UserContext from "../Utils/UserContext";


// const Body = () => {

//   // Local State Variable - Super Powerful variable
//   const[listofRestaurants, setlistofRestaurants] = useState([]);
//   const[filteredRestaurant, setFilteredRestaurant] = useState([]);
//   const[searchText, setSearchText] = useState("");

//   const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
//   // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)


// function promise(){
//   return new Promise((resolve,reject)=>{
//     const data = fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8149786&lng=75.81533859999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  
//     // const json =  data.json();
// let newdata = data
// if(newdata){
//   resolve(newdata)
// }else{
//   reject("data not found")
// }
//   })
// }

    
//     useEffect(()=>{
//       fetchData();
//     },[]);

//     const fetchData = async () => {

//       try{
//         const result = await promise()
//         // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8149786&lng=75.81533859999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
//         const json = await result.json();
//         // console.log(json)

//         // Optional Chaining
//         const page1 = await json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//         const page2 = await json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//         const newdata = (page1 || page2)
//         const newData = (page1 || page2)
//         setlistofRestaurants(newdata)
//         // console.log(newData)
//         setFilteredRestaurant(newData)
//       }catch(error){
//         setlistofRestaurants(error)
//       }
//     }
//     // fetchData()
//     // console.log(listofRestaurants)
    
//     const onlineStatus = useOnlineStatus();

//     if(onlineStatus === false)
//       return(
//         <h1>Looks linke you're offline!</h1>
//       )


//     return listofRestaurants.length === 0 ? <Shimmer/> : (
//       <div className='body'>
//         <div className='filter relative flex justify-around items-center relative nav-data'>
//           <div className="search m-4 p-4 relative">
//             <input type="text" className="border outline-none p-3 border-solid rounded-3xl shadow-md h-12 w-[700px] relative" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
//             <button className="px-4 py-2 bg-orange-500 text-white m-4 rounded-full absolute bottom-1 right-1" onClick={()=>{
//               // Filter the Restaurants cards and update the UI
//               // searchText
//               console.log(searchText);

//               const filteredRestaurant = listofRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
//               setFilteredRestaurant(filteredRestaurant);
//             }}><i className="fa-solid fa-magnifying-glass"></i></button>
//           </div>

//           <div className="search m-4 p-4 flex items-center">
//             <button className="px-4 py-2 bg-orange-500 text-white rounded-lg" onClick={()=>{
//               const filterList = listofRestaurants.filter((res)=> res.info.avgRating > 4);
//               setFilteredRestaurant(filterList);
//             }}>Top Rated Restaurants</button>
//           </div>
          
//         </div>
//         <div className='flex flex-wrap'>
//           {filteredRestaurant.map((resData)=>(<Link key={resData.info.id} to={"/restaurants/" + resData.info.id}>
            
//             {
//             resData.info.promoted ? <RestaurantCardPromoted resData={resData}/> : <RestaurantCard resData={resData}/>
//             }
//             </Link>) 
//           )}
//         </div>
//       </div> 
//     )
//   }

//   export default Body;

import React from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { Swiggy_API } from "../Utils/Constant";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  function promise() {
    return new Promise((resolve, reject) => {
      fetch(Swiggy_API)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await promise();
      const page1 = result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      const page2 = result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      const newData = page1 || page2;
      setlistofRestaurants(newData);
      setFilteredRestaurant(newData);
    } catch (error) {
      setlistofRestaurants(error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>Looks like you're offline!</h1>;
  }

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex flex-col sm:flex-row justify-around items-center relative nav-data">
        <div className="search m-4 p-4 relative">
          <input
            type="text"
            className="border outline-none p-3 border-solid rounded-3xl shadow-md h-12 w-full md:w-96 lg:w-12/12 xl:w-12/12 relative"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-orange-500 text-white m-4 rounded-full absolute bottom-1 right-1"
            onClick={() => {
              const filteredRestaurant = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded-lg sm:mt-4 md:mt-0"
            onClick={() => {
              const filterList = listofRestaurants.filter((res) => res.info.avgRating > 4);
              setFilteredRestaurant(filterList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((resData) => (
          <Link key={resData.info.id} to={"/restaurants/" + resData.info.id}>
            {resData.info.promoted ? (
              <RestaurantCardPromoted resData={resData} />
            ) : (
              <RestaurantCard resData={resData} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
