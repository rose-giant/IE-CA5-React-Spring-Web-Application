import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./manager.css"

export default function ManagerRestaurants({ restaurants }) {

    const navigate = useNavigate()
    const handleManage = (e, restaurantName) => {
        // e.preventDefault()   
        // navigate(`/manage/${restaurantName}`)
    }

    return (
        <div className="restaurants">
            <div className="table center second-table">
                <ul>
                    <li>
                        <div className="inline-cell">
                            <p className="bold">My Restaurants </p>
                            <a className="red-btn btn" href="ManagerSecondPage.html">Add</a>
                        </div>
                    </li>
                </ul>
                <ul>
                    {restaurants.map((restaurant, index) => (
                    <li key={index}>
                        <div className="inline-cell">
                            <p className="bold">{restaurant && restaurant.name} </p>
                            <p className="bold">{restaurant.address.city}, {restaurant.address.country} </p>
                            <form className="red-btn btn" onSubmit={handleManage(restaurant.name) }>Manage</form>
                        </div>
                    </li> 
                    ))}
                </ul>
                
            </div>
        </div>
    )
}