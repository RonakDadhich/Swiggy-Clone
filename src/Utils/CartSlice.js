import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state, action) => {
           
            // Redux Toolkit uses immer BTS 
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.splice(action.payload,1);
        },
        // originalState = {items:["pizza"]}
        clearCart: (state, action) => {
            // RTK - either Mutate the existing state or return a new state
            //state.items.length = 0; // originalState = []
            return {items: []}; // this new object will be replaced inside originalState = {items:[]}
        },
    },
});

export const {addItem,removeItem,clearCart} = CartSlice.actions;

export default CartSlice.reducer;