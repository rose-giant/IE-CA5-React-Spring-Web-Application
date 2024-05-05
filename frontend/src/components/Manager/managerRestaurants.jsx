// import React, { useEffect, useState } from "react"
// import axios from "axios"
// import RestaurantCard from "./restaurantcard"
// import RestaurantDetail from "../Restaurant/detail"

export default function ManagerRestaurants({ restaurants }) {

    return (
        <div class="restaurants">
            <table class="table center second-table">
                <ul>
                    <li>
                        <div class="inline-cell">
                            <p class="bold">My Restaurants </p>
                            <a class="red-btn btn" href="ManagerSecondPage.html">Add</a>
                        </div>
                    </li>
                </ul>
                <ul>
                    {restaurants.map((restaurant, index) => (
                    <li key={index}>
                        <div class="inline-cell">
                            <p class="bold">{restaurant.name} </p>
                            <p class="bold">{restaurant.address.city}, {restaurant.address.country} </p>
                            <a class="red-btn btn" href="ManagerManage.html">Manage</a>
                        </div>
                    </li> 
                    ))}
                </ul>
                
            </table>
        </div>
    )
}