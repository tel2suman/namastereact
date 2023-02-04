
import React from "react";

import { RestaurentList } from "../config";

import {RestaurentCard} from "./RestaurentCard";

import { useState, useEffect } from "react";

import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";

import useOnline from "../utils/useOnline";

import errorImage from "../../images/error.png"

import { filterData } from "../utils/helper";

const Body = ({user}) => {

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
      //console.log(json);
      //optional chaining
      setAllRestaurents(json?.data?.cards[2]?.data?.data?.cards)
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    const isOnline = useOnline();

    if(!isOnline) {
        return (
            <React.Fragment>
                <div className="main">
                    <div className="fof">
                        <img src={errorImage} className="error-img" alt=""/>
                        <h1>Sorry, You Are Offline, Please Check Your internet Connection</h1>
                    </div>
                </div>
            </React.Fragment>
          )
      }

   //console.log("render");

   if(!allRestaurents) return null;

   //if(filteredRestaurants?.length === 0) return <h4>No Results Found</h4>

    return (allRestaurents?.length === 0 ) ? <Shimmer/> : (
      <React.Fragment>
      {/* <div className="flex items-center justify-center p-5">
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
      </div> */}
      <div className="flex items-center justify-center p-5 bg-gray-100">
        <div className="sm:w-full rounded-lg p-3 lg:w-2/4">
          <div className="flex">
            <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-amber-50 bg-white p-5">
              <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
              </svg>
            </div>
            <input type="text"  className="w-full bg-white pl-2 text-base font-semibold outline-0" placeholder="Search Your Restaurent" value={searchTxt} id="" onChange={(e) => { 
              setsearchTxt(e.target.value); 
              }}/>
            <button className="bg-amber-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors" onClick={()=>{
              //filter the restaurent & update the state
              const data = filterData(searchTxt.toLocaleLowerCase(),allRestaurents);
              //update the state
              setFilteredRestaurants(data);
            }}>Search</button>
          </div>
        </div>
      </div>
        <div className="restaurant-list py-10 bg-gray-100 mx-auto grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* {if(filteredRestaurants?.length === 0) return <h4>No Results Found</h4>} */}
        {/* {console.log(useState())} */}
            {filteredRestaurants.map((restaurant) => {
              return (
                <React.Fragment>
                  <Link to={"/restaurent/" + restaurant.data.id} key={restaurant.data.id}>
                    <RestaurentCard {...restaurant.data} user={user} />
                  </Link>
                </React.Fragment>
              );
            })}
        </div>
      </React.Fragment>
    );
  };


export default Body;