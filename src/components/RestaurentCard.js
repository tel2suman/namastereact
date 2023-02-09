
import React from "react";

import { IMG_CDN_URL } from "../config";

import { useContext } from "react";

import UserContext from "../utils/UserContext";

const RestaurentCard = ({
  cloudinaryImageId, 
  name, 
  cuisines, 
  avgRating,
  slaString,
  costForTwoString,
}) => {
  const {user} = useContext(UserContext);
  return (
    <React.Fragment>
      <div className="card">
      <article className="rounded-xl bg-yellow-50 border-4 border-amber-500 p-2 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
      <div className="relative flex items-end overflow-hidden rounded-xl">
          <div className="card-info">
          <img className="rounded-xl mb-3 shadow-lg" src={IMG_CDN_URL+cloudinaryImageId} />
            <h2 className=" text-xl font-medium">{name}</h2>
            <p className="font-semibold">{cuisines.join(",")}</p>
            <h4 className="font-bold">{avgRating} stars</h4>
            <span className="font-normal">{slaString}</span>
            <h5 className="font-normal">{costForTwoString}</h5>
            <h5 className="font-semibold">{user.name}</h5>
          </div>
        </div>
        </article>
      </div>
    </React.Fragment>
  );
};

export default RestaurentCard;