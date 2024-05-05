import React from "react"
import { useLocation } from "react-router-dom"
import "./search.css"
import axios from "axios"
import { useEffect, useState } from "react"
import RestaurantCard from "../Home/restaurantcard"
import Nav from "../Nav/nav"
import { useContext } from "react"
import { Context } from "../../App"
import Footer from "../Footer/footer"

export default function Search() {
    const location = useLocation()
    const [signedIn, setSignedIn] = useContext(Context)
    const searchParams = new URLSearchParams(location.search)
    const locationParam = searchParams.get('location')
    const restaurantParam = searchParams.get('restaurant')
    const searchParam = searchParams.get('search')
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6

    const [restaurants, setRestaurants] = useState([])
    // const restaurant = {
    //     address: {
    //       city: "Pittsburgh",
    //       country: "US",
    //       street: "620 William Penn Place"
    //     },
    //     description: "At our gastropub, we don't distinguish between commoners and kings; we just want to feed the good people of Pittsburgh. In the restaurant, seasonal menus add a modern flair to classic comforts, complemented by a robust selection of local beers and craft spirits. It's all served in an industrial-inspired setting in downtown Pittsburgh. Come and join us for an uncommonly good time.",
    //     endTime: "23:00",
    //     image: "https://resizer.otstatic.com/v2/photos/xlarge/1/31676318.webp",
    //     managerUsername: "ali",
    //     name: "The Commoner",
    //     startTime: "07:00",
    //     type: "American"}

    useEffect(() => {
        axios.get("http://localhost:8080/restaurants")
          .then(response => {
            setRestaurants(response.data);
          })
          .catch(error => {
            console.error("Error fetching restaurants:", error);
          });
      }, [])

    const filteredRestaurants = restaurants.filter(restaurant => {
        const matchesLocation = !locationParam || restaurant.address.city === locationParam
        const matchesRestaurantType = !restaurantParam || restaurant.type === restaurantParam
        const matchesSearchQuery = !searchParam || restaurant.name.toLowerCase().includes(searchParam.toLowerCase())
        return matchesLocation && matchesRestaurantType && matchesSearchQuery
    })

    const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredRestaurants.slice(indexOfFirstItem, indexOfLastItem);

    return(
        
        <>
        <div className="homepage">
            <Nav /> 
        </div>
        <div className="search-container">
          <ul>
            {currentItems.map((restaurant, index) => (
              <li key={index}>
                <RestaurantCard restaurant={restaurant} />
              </li> 
            ))}
          </ul>
        
        </div>

        <div className="pages">
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <span>{currentPage} of {totalPages}</span>
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
            </div>
        <Footer />
      </>
    )
}