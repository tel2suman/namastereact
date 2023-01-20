
import React from "react";

import { IMG_CDN_URL } from "../config";

export const RestaurentCard = ({
  cloudinaryImageId, 
  name, 
  cuisines, 
  avgRating 
}) => {

  return (
    <React.Fragment>
      <div className="card">
        <img src={IMG_CDN_URL+cloudinaryImageId} />
        <div className="card-info">
          <h2>{name}</h2>
          <p>{cuisines.join(",")}</p>
          <h4>{avgRating} stars</h4>
          
        </div>
      </div>
    </React.Fragment>
  );
};
