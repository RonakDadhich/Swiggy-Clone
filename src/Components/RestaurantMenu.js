// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    // const [resInfo,setResInfo] = useState(null);

    const {resId} = useParams(); 

    const dummy = "Dummy Data";
     
    const resInfo = useRestaurantMenu(resId)
    
    const[showIndex,setShowIndex] = useState(null);

    // useEffect(()=>{
    //     fetchMenu();
    // },[]);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resId);
    //     const json = await data.json();
    //     setResInfo(json.data);
    // };
    
    if(resInfo === null) return <Shimmer/>
    // const data = resInfo?.cards[0]?.card?.card?.info;
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    // console.log(cuisines,costForTwoMessage)

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    // console.log(itemCards)
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories) 

    if(!itemCards) return
    
   
    // const {name,cuisines,costForTwoMessage} = data
// console.log(data.name)
    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* categories accordians */}
            {categories.map((category,index)=>
            // controlled component 
            (<RestaurantCategory key={category?.card?.card.title} data = {category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={()=>setShowIndex(index)}
            dummy={dummy}
            />))}
        </div>
    )
}

export default RestaurantMenu;