import React, { useContext, useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import "./manager.css"
import { Context } from "../../App"
import { useParams } from 'react-router-dom';
import Footer from "../Footer/footer"
import axios from "axios"


export default function ManageRestaurant({route}) {
    const [signedIn, setSignedIn] = useContext(Context)

    const [restaurant, setRestaurant] = useState([])
    const [restaurants, setRestaurants] = useState([])
    
    const { restaurantName } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8080/restaurants")
          .then(response => {
            setRestaurant(response.data.filter(rest => rest.name == restaurantName)[0]);
        })
          .catch(error => {
            console.error("Error fetching restaurants:", error);
          });
    }, [restaurant])

   // console.log(restaurantName)
    // console.log(restaurants)
    // console.log(restaurant)

    return (
        <>
            <div >
              <div class="sub-nav">
                  <p class="normal-font">{restaurant.name}</p>
                  <p class="normal-font">{restaurant.address}</p>
              </div>
                {/* 
                {manager && (
                <Email email={manager.email}/>
                )}
                <ManagerRestaurants restaurants={restaurants}/>
                <Footer /> */}
            </div>
            
        </>
    )
}