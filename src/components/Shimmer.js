
import React from "react";


const Shimmer = () => {

    return(
        <React.Fragment>
        <div className="restaurant-list grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-10 p-6 bg-gray-100">
            {   Array(16).fill("").map((e,index)=>
                <div className="w-full bg-white drop-shadow-md rounded-lg p-2" key={index}>
                <div class="animate-pulse w-full h-48 bg-slate-200"></div>
            <div class="p-3 space-y-4">
                <div class="animate-pulse w-2/3 h-6 bg-slate-200"></div>
                <div class="flex space-x-4">
                    <div class="animate-pulse w-1/3 h-3 bg-slate-200"></div>
                    <div class="animate-pulse w-1/3 h-3 bg-slate-200"></div>
                    <div class="animate-pulse w-1/3 h-3 bg-slate-200"></div>
                </div>
                <div class="space-y-2">
                    <div class="animate-pulse w-3/4 h-3 bg-slate-200"></div>
                    <div class="animate-pulse w-full h-3 bg-slate-200"></div>
                    <div class="animate-pulse w-2/3 h-3 bg-slate-200"></div>
                </div>
            </div>
                </div>
            )}
        </div>
        </React.Fragment>
    )
}

export default Shimmer;