
import React from "react";

import { useParams } from "react-router-dom";

import { IMG_CDN_URL } from "../config";

import Shimmer from "./Shimmer";

import useRestaurentDetails from "../utils/useRestaurentDetails";

import { addItem } from "../utils/cartSlice";

import { useDispatch } from "react-redux";

const RestaurentDetails = () => {

     const {resId} = useParams();
     //console.log(params);
     const restaurantDetails = useRestaurentDetails(resId);

     const dispatch = useDispatch();

     const addFoodItem = (item) => {
        dispatch(addItem(item));
     }
     


    return (!restaurantDetails) ? <Shimmer/> : (
        <React.Fragment>
             
            <div className="menu-items py-36 bg-gray-100 mx-auto">
                <div className="block md:flex space-x-0 md:space-x-6 mb-16 ml-6 mt-8">
                <div className="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:4/7 relative rounded block">
                    <article className="rounded-xl bg-yellow-50 border-4 border-amber-500 p-2 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
                        <div className="relative overflow-hidden rounded-xl">
                            <div className="card-info">
                            <img className="rounded-xl mb-3 shadow-lg w-full" src={IMG_CDN_URL + restaurantDetails.cloudinaryImageId} alt="" />
                                <h2 className=" text-xl font-medium">{restaurantDetails.name}</h2>
                                <h3 className=" text-xl font-medium">{restaurantDetails.area}, {restaurantDetails.city}</h3>
                                <p className="font-semibold">{restaurantDetails.costForTwoMsg}</p>
                                <h4 className="font-bold">{restaurantDetails.totalRatings} stars</h4>
                            </div>
                        </div>
                    </article>
                </div>

                <div className="w-full md:w-full">
                    <h2 className="text-2xl my-4 text-amber-500 font-bold">Recommended Items</h2>
                        {console.log(Object.values(restaurantDetails.menu.items))}
                    <ul>
                        {Object.values(restaurantDetails?.menu?.items).map((item) => (
                            <div className="rounded w-full flex flex-col md:flex-row mb-5 rounded-xl bg-yellow-50 border-4 border-amber-500 p-2 shadow-lg">
                            <img src={IMG_CDN_URL + item.cloudinaryImageId} className="block w-auto md:hidden lg:block rounded-md h-56 md:h-36 m-4 md:m-0" />
                                <div key={item.id} className="rounded px-4 w-full">
                                    <span className="text-lime-600 text-xl font-medium"> {item.name} </span>
                                    <div className="md:mt-0 text-gray-800 font-semibold text-xl mb-1">
                                        {item.category}
                                    </div>
                                    <p className="font-semibold mb-4">₹ {item.price/100}</p>
                                    <button className="inline-flex items-center px-4 py-2 bg-amber-500 capitalize hover:bg-lime-600 text-white text-base font-medium rounded-md"
                                     onClick={() => addFoodItem(item)}><i className="bi bi-plus-circle mr-2"></i> Add To cart</button>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
      </div>
    </React.Fragment>
    )
}

export default RestaurentDetails;