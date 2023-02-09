
import React from "react";

import { IMG_CDN_URL } from "../config";


const FoodItem = ({ name, category, description, cloudinaryImageId, price }) => {

  return (
    <React.Fragment>
    
      {/* <div className="card">
      <div className="restaurant-list py-10 bg-gray-100 mx-auto grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="relative flex items-end overflow-hidden rounded-xl">
          <div className="card-info">
          <img className="rounded-xl mb-3 shadow-lg" src={IMG_CDN_URL+cloudinaryImageId} />
            <h2 className=" text-xl font-medium">{name}</h2>
            <p className="font-semibold">{category}</p>
            <h4 className="font-bold">{description} stars</h4>
            <h5 className="font-normal">₹ { price/100}</h5>
          </div>
        </div>
      </div>
      </div> */}
     
      <div className="card">
      <article className="rounded-xl bg-yellow-50 border-4 border-amber-500 p-2 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
      <div className="relative flex items-end overflow-hidden rounded-xl">
      <div className="card-info">
          <img className="rounded-xl mb-3 shadow-lg" src={IMG_CDN_URL+cloudinaryImageId} />
            <h2 className=" text-xl font-medium">{name}</h2>
            <p className="font-semibold">{category}</p>
            <h4 className="font-bold">{description} stars</h4>
            <h5 className="font-normal">₹ { price/100}</h5>
          </div>
        </div>
        </article>
        </div>
    </React.Fragment>
  );
};

export default FoodItem;