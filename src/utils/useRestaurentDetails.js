
import { useState , useEffect } from "react";

import { FETCH_MENU_DETAILS_URL } from "../config";

const useRestaurentDetails = (resId) => {

    const [restaurantDetails, setRestaurentDetails] = useState(null);

    useEffect(() => {
        getRestaurentInfo();
    }, []);

    //async function
    async function getRestaurentInfo() {
        //API Call
        const data = await fetch (FETCH_MENU_DETAILS_URL + resId);

        const json = await (data).json();

            console.log(json);
            
        setRestaurentDetails(json?.data);
    }

    return restaurantDetails;
    
}

export default useRestaurentDetails;