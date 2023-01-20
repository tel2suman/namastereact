
import React from "react";

import { useParams } from "react-router-dom";

import { useEffect , useState } from "react";

import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurentDetails = () => {

     const [restaurantDetails, setRestaurentDetails] = useState(null);

    const {resId} = useParams();
    //console.log(params);
    useEffect(() => {
        getRestaurentInfo();
    }, []);

    //async function
    async function getRestaurentInfo() {
        //API Call
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/v4/full?lat=22.6107101&lng=88.42706020000001&menuId=" + 
            resId
        );
      const json = await (data).json();
      console.log(json);
      setRestaurentDetails(json?.data);
    }

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
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default RestaurentDetails;