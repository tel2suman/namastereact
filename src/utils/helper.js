import React from "react";

export function  filterData(searchTxt, restaurants) {
    const filterData = restaurants.filter ((restaurant) => 
      restaurant?.data?.name?.toLocaleLowerCase()?.includes(searchTxt.toLocaleLowerCase())
    );
    return filterData;
  }