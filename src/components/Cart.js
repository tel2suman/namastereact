 import React from "react";

 import  RestaurentCard  from "./RestaurentCard";

import { useDispatch, useSelector } from "react-redux";

import FoodItem from "./FoodItem";

import { clearCart } from "../utils/cartSlice";

 const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {

        dispatch(clearCart());
    }

    return (

        <React.Fragment>
            <div className=" mt-60">
                <h3 className="text-sm font-medium text-amber-500 py-5">Cart Items {cartItems.length}</h3>
                <button className="inline-flex items-center px-4 py-2 bg-amber-500 capitalize hover:bg-lime-600 text-white text-base font-medium rounded-md"
                onClick={() => handleClearCart()}><i className="bi bi-dash-circle mr-2"></i> Remove From cart</button>
                <div className="restaurant-list py-10 bg-gray-100 mx-auto grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {cartItems.map(item => <FoodItem key={item.id} {...item}/> )}
                </div>
            </div>

        </React.Fragment>
    )

 }

 export default Cart;