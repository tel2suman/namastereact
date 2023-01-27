
import React from "react";

import { useParams } from "react-router-dom";

import { IMG_CDN_URL } from "../config";

import Shimmer from "./Shimmer";

import useRestaurentDetails from "../utils/useRestaurentDetails";

const RestaurentDetails = () => {

     const {resId} = useParams();
     //console.log(params);
     const restaurantDetails = useRestaurentDetails(resId);

    return (!restaurantDetails) ? <Shimmer/> : (
        <React.Fragment>
             
            <div className="menu-items">
                <div>
                    <h1>Restaurent id:{restaurantDetails.id}</h1>
                    <h2>Restaurent name:{restaurantDetails.name}</h2>

                    <img src={IMG_CDN_URL + restaurantDetails.cloudinaryImageId} alt=""/>
                    <h3>{restaurantDetails.area}</h3>
                    <h3>{restaurantDetails.city}</h3>
                    <h3>{restaurantDetails.totalRatings}</h3>
                    <h3>{restaurantDetails.costForTwoMsg}</h3>
                </div>

                <div>
                    <h2>Our Other Menu</h2>
                        {console.log(Object.values(restaurantDetails.menu.items))}
                    <ul>
                        {Object.values(restaurantDetails?.menu?.items).map((item) => (
                            <li key={item.id}>{item.name},{item.category}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default RestaurentDetails;