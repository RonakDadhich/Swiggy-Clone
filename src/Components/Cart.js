
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { removeItem } from "../Utils/CartSlice";
import { clearCart } from "../Utils/CartSlice";
import { CDN_URL } from "../Utils/Constant";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="text-center m-4 p-4">
      
    
        
      <div className="w-full md:w-6/12 m-auto">
        
        {cartItems.length === 0 ? (
          <div>
       <h1 className="text-2xl font-bold">
        <img
          className="empty-cart"
          src="https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png"
          alt=""
          />
          </h1>
            <h1>Cart is empty. Add Items to the cart!</h1>
          </div>
        ):  <div>

<button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>

        {cartItems.map((item,index) => (
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
             
                <button className="p-2 my-9 mx-4 rounded-lg bg-orange-600 text-white" onClick={()=> handleRemoveItem(index)}>Remove-</button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" alt="" />
            </div>
        </div>
        ))}
</div>}
       
        
    
      </div>
    </div>
      
  );
};

export default Cart;
