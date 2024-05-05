import React, { useContext, useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import "./manager.css"
import { Context } from "../../App"
import ManagerNav from "./managerNav"
import Footer from "../Footer/footer"
import axios from "axios"




export default function ManageRestaurant() {
    const [signedIn, setSignedIn] = useContext(Context)

    const [restaurant, setRestaurant] = useState([])
    const [restaurants, setRestaurants] = useState([])

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search) 
    const restName = searchParams.get('name')
    console.log(restName)

    useEffect(() => {
        axios.get("http://localhost:8080/restaurants")
          .then(response => {
            setRestaurant(response.data.filter(rest => rest.name == restName)[0]);
            setRestaurants(response.data)
        })
          .catch(error => {
            console.error("Error fetching restaurants:", error);
          });
    }, restaurants)

   
    // console.log(restaurants)
    // console.log(restaurant)

    return (
        <>
            <div >
                {/* <ManagerNav />
                {manager && (
                <Email email={manager.email}/>
                )}
                <ManagerRestaurants restaurants={restaurants}/>
                <Footer /> */}
            </div>
            
        </>
    )
}