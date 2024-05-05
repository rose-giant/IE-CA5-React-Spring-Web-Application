import React, { useContext, useState, useEffect } from "react"
import "./manager.css"
import { Context } from "../../App"
import ManagerNav from "./managerNav"
import Footer from "../Footer/footer"
import axios from "axios"
import Email from "./Email"
import ManagerRestaurants from "./managerRestaurants"



export default function Manager() {
    const [signedIn, setSignedIn] = useContext(Context)

    setSignedIn("amin")

    const [users, setUsers] = useState([])
    const [restaurants, setRestaurants] = useState([])
    const [manager, setManager] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/users")
            .then(response => {
                setManager(response.data.filter(user => user.username == signedIn)[0])
                setUsers(response.data)
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });
    }, [])

    useEffect(() => {
        axios.get("http://localhost:8080/restaurants")
          .then(response => {
            setRestaurants(response.data.filter(rest => rest.managerUsername == signedIn));
            // setRestaurants(response.data)
        })
          .catch(error => {
            console.error("Error fetching restaurants:", error);
          });
    }, restaurants)

    // console.log(users)
    // console.log(manager)
    // console.log(restaurants)

    return (
        <>
            <div >
                <ManagerNav />
                {manager && (
                <Email email={manager.email}/>
                )}
                <ManagerRestaurants restaurants={restaurants}/>
                <Footer />
            </div>
            
        </>
    )
}