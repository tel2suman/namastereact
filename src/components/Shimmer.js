
import React from "react";


const Shimmer = () => {

    return(
        <React.Fragment>
        <div className="restaurant-list">
            {   Array(16).fill("").map((e,index)=>

                <div className="shimmer-card" key={index}>
                    <div className="shimmerBG media"></div>
                    <div className="p-32">
                        <div className="shimmerBG title-line"></div>
                        <div className="shimmerBG title-line end"></div>
                        <div className="shimmerBG content-line m-t-24"></div>
                    </div>
                </div>
            )}
        </div>
        </React.Fragment>
    )
}

export default Shimmer;