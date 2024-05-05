import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./manager.css"

export default function ManagerRestaurants({ restaurants }) {

    const navigate = useNavigate()

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
                            <form class="red-btn btn" onSubmit={(e) => navigate(`/restaurant/${restaurant.name}`)}>Manage</form>
                        </div>
                    </li> 
                    ))}
                </ul>
                
            </table>
        </div>
    )
}