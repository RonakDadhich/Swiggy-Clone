
import { CDN_URL } from "../Utils/Constant";


const RestaurantCard = (props) => {
    const {resData} = props;
   
    

    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime} = resData?.info;
  
    // const data =resData?.card?.card?.gridElements?.infoWithStyle?.restaurants
    return(
      <>
          <div className="m-4 p-4 w-[250px] rounded-lg card">
            <div className= "cart-image">
             <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} alt="res-logo"/> 
            </div>
              
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4 className="mb-3">{cuisines.join(", ")}</h4>
        <span className="content mb-3"><i className="fa-solid fa-star text-orange-600"></i><i className="fa-solid fa-star text-orange-600"></i><i className="fa-solid fa-star text-orange-600"></i> Name {avgRating} Stars</span>
        <p>{costForTwo}</p>
        <h2>{deliveryTime} minutes</h2>
        </div>
      </>
    );
    };

    // Higher Order Component

    // input - RestaurantCard => RestaurantCardPromoted
    
    export const withPromotedLabel = (RestaurantCard) => {
      return(props) => {
        return(
          <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
            <RestaurantCard {...props}/>
          </div>
        );
      };
    };

    export default RestaurantCard;