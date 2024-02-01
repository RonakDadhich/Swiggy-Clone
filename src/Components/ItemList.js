import { useDispatch } from "react-redux";
import {addItem} from "../Utils/CartSlice";
import { CDN_URL } from "../Utils/Constant";

const ItemList = ({items,dummy}) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item))
    }

    // const handleRemoveItem = (item) => {
    //     dispatch(removeItem(item))
    // }
    return <div>
            {items.map((item) => (
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                
                <div className="w-8/12">
                <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span> - ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-4/12 p-4 relative"> 
                <div className="absolute">
                    <button className="p-2 mx-10 rounded-lg bg-orange-600 text-white shadow-lg" onClick={() => handleAddItem(item)}>Add+</button>
                    {/* <button className="p-2 my-9 mx-4 rounded-lg bg-orange-600 text-white" onClick={()=> handleRemoveItem(item)}>Remove-</button> */}
                </div>
                <img src={CDN_URL + item.card.info.imageId} className="w-full" alt="" />
                </div>
            </div>
            ))}
    </div>
};

export default ItemList;