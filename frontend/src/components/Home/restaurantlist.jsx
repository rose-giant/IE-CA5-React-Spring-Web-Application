import React, { useEffect, useState } from "react";
import RestaurantCard from "./restaurantcard";

export default function RestaurantList() {

    const [restaurants, setRestaurants] = useState([])
    useEffect(() => {
        //fetch restaurants
    }, [])

    return(
        <div className="listcontainer">
            <RestaurantCard />
        </div>
    )
}