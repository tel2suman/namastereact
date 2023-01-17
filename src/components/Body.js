
import React from "react";

import { RestaurentList } from "../config";

import {RestaurentCard} from "./RestaurentCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function  filterData(searchTxt, restaurants) {
  const filterData = restaurants.filter ((restaurant) => 
    restaurant?.data?.name?.toLocaleLowerCase()?.includes(searchTxt.toLocaleLowerCase())
  );
  return filterData;
}

const Body = () => {

  const [allRestaurents, setAllRestaurents] = useState([]);

   const [filteredRestaurants, setFilteredRestaurants] = useState([]);

   const [searchTxt, setsearchTxt] = useState("");

   useEffect(() => {
    getRestaurents();
   }, []);

   //async

    async function getRestaurents() {
        //API Call
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6107101&lng=88.42706020000001&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await (data).json();
      console.log(json);
      //optional chaining
      setAllRestaurents(json?.data?.cards[2]?.data?.data?.cards)
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

   //console.log("render");

   if(!allRestaurents) return null;

   //if(filteredRestaurants?.length === 0) return <h4>No Results Found</h4>

    return (allRestaurents?.length === 0 ) ? <Shimmer/> : (
      <React.Fragment>
      <div className="search-container">
        <div>
            <input type="text" placeholder="Search.." name="search" value={searchTxt} onChange={(e) => { 
              setsearchTxt(e.target.value); 
              }}/>
            <button onClick={()=>{
              //filter the restaurent & update the state
              const data = filterData(searchTxt.toLocaleLowerCase(),allRestaurents);
              //update the state
              setFilteredRestaurants(data);
            }}>Search</button>
        </div>
      </div>
        <div className="restaurant-list">
        {/* {if(filteredRestaurants?.length === 0) return <h4>No Results Found</h4>} */}
            {filteredRestaurants.map(restaurant => {
              return (
                <RestaurentCard {...restaurant.data} key={restaurant.data.id} />
              );
            })}
        </div>
      </React.Fragment>
    );
  };


export default Body;