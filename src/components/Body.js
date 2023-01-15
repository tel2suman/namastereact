
import React from "react";

import { RestaurentList } from "../config";

import {RestaurentCard} from "./RestaurentCard";

import { useState } from "react";

function  filterData(searchTxt, restaurants) {
  const filterData = restaurants.filter ((restaurant) => 
    restaurant.data.name.includes(searchTxt)
  );
  return filterData;
}

const Body = () => {

   const [restaurants, setRestaurants] = useState(RestaurentList);

   const [searchTxt, setsearchTxt] = useState("");


    return (
      <React.Fragment>
      <div className="search-container">
        <div>
            <input type="text" placeholder="Search.." name="search" value={searchTxt} onChange={(e) => { 
              setsearchTxt(e.target.value); 
              }}/>
            <button onClick={()=>{
              //filter the restaurent & update the state
              const data = filterData(searchTxt,restaurants);
              //update the state
              setRestaurants(data);
            }}>Search</button>
        </div>
      </div>
        <div className="restaurant-list">
            {restaurants.map(restaurant => {
              return (
                <RestaurentCard {...restaurant.data} key={restaurant.data.id} />
              );
            })}
        </div>
      </React.Fragment>
    );
  };


export default Body;