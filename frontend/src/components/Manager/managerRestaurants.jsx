import React, { useContext, useState, useEffect } from "react"
import { Context } from "../../App"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./manager.css"

export default function ManagerRestaurants() {

    const [restaurants, setRestaurants] = useState([])
    const [signedIn, setSignedIn] = useContext(Context)

    useEffect(() => {
        axios.get("http://localhost:8080/restaurants")
          .then(response => {
            setRestaurants(response.data.filter(rest => rest.managerUsername == signedIn));
        })
          .catch(error => {
            console.error("Error fetching restaurants:", error);
          });
    }, restaurants)

    // console.log(restaurants);
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