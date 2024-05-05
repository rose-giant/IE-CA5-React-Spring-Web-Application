import React, { useContext, useEffect, useState } from "react"
import { IsOpen } from "../Helpers/isOpen"
import "./detail.css"
import ReviewList from "../Reviews/reviewList"
import { Context } from "../../App"
import { useParams } from "react-router-dom"
import axios from "axios"
import Nav from "../Nav/nav"
import ReserveModal from "../Helpers/reserveModal"

export default function RestaurantDetail() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [signedIn, setSignedIn] = useContext(Context)
    const [date, setDate] = useState()
    const [clickedIndex, setClickedIndex] = useState(null)
    const [dates, setDates] = useState([])
    const [restaurant, setRestaurant] = useState()
    const [restaurants, setRestaurants] = useState([])
    const target = null

    const getAvailableTimes = () => {
        if (restaurant != null) {
            const startTime = parseInt(restaurant.startTime.split(':')[0]);
            const endTime = parseInt(restaurant.endTime.split(':')[0]);
            const availableDates = [];
            
            for (let hour = startTime; hour <= endTime; hour++) {
                const formattedHour = hour < 10 ? `0${hour}:00` : `${hour}:00`;
                availableDates.push(formattedHour);
            }
            
            setDates(availableDates)
        }
    }

    const pickDate = (date, index) => {
        setDate(date)
        setClickedIndex(index)
        console.log("index is ", index)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    
    const findTargetRest = (rests) => {
        rests.forEach(item => {
            if (String(item.name).valueOf().trim() == String(param.name).valueOf().trim()) {
                setRestaurant(item)
            }
        })
    }

    const param = useParams()
    useEffect(() => {
        axios.get("http://localhost:8080/restaurants")
        .then(response => {
            findTargetRest(response.data)
        })
        .catch(error => {
          console.error("Error fetching restaurants:", error);
        })
        // setFakes()
        
        getAvailableTimes()
    }, [restaurant, param])

    return(
        <>
        <div class="contain">
            <div class="card show">
                <div class="header">
                </div>
        
                {restaurant && (
                <div class="body">
                    <img src={restaurant.image} alt="" />
                    <div class="banner-sub">
                        <p class="title">
                            {restaurant.name}
                        </p>

                        <button>
                            {
                                IsOpen(restaurant.startTime, restaurant.endTime) ?
                                "Open!" :
                                "Closed"
                            }
                        </button>
                    </div>
                </div>
                )}

                {restaurant && (
                <div class="card-footer">
                    <div class="detailed-info">
                        <div class="time">
                            <img class="icon-clock icon" src="./icons/svg/clock-svgrepo-com.svg" alt="" />
                            From {restaurant.startTime} to {restaurant.endTime}
                        </div>

                        <div class="review">
                            <img class="icon-review icon" src="./icons/svg/message-square-heart-svgrepo-com.svg" alt="" />
                            160 Reviews
                        </div>

                        <div class="type">
                            <img class="icon-type icon" src="./icons/svg/restaurant-svgrepo-com.svg" alt="" />
                            {restaurant.type}
                        </div>
                    </div>

                    <div class="location">
                        <img class="icon-location" src="./icons/svg/location-pin-svgrepo-com.svg" alt="" />
                        <p>
                            {restaurant.address.country}, &nbsp; {restaurant.address.city}, &nbsp;
                            {restaurant.address.street}
                        </p>
                    </div>

                    <div class="description">
                        {restaurant.description}
                    </div>
                </div>
                )}
            </div>

            {restaurant && (
            <div class="reserve">
                <p class="title">Reserve Table</p>

                <form action="" onSubmit={handleSubmit}>
                    <div class="top">
                        <label for="for">For&nbsp;</label>
                        <select class="enter" name="for" id="for">
                            <option value="0"></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>

                        <label for="people">people,&nbsp;&nbsp;</label>
                        <label for="date"> date&nbsp;</label>
                        <input class="enter" type="date" />
                    </div>

                    <div class="bottom">
                        <div class="title">Available Times for Table #1 (2 seats)</div>
                        {
                            signedIn === "" ?
                            <ul>
                                {dates.map((date, index) => (
                                    <li key={index}>
                                        <button className="reserve-btn" style={{ backgroundColor: 'white', color: 'gray', borderColor: 'gray', margin: 0}}>
                                            {date}
                                        </button>
                                    </li>
                                ))}
                            </ul> :

                            <ul>
                                {dates.map((date, index) => (
                                    <li key={index}>
                                        <button className="reserve-btn" style={{ backgroundColor: index === clickedIndex ? '#ED3545' : 'white', 
                                        color: index === clickedIndex ? 'white' : '#ED3545', margin: 0 }}
                                        onClick={() => pickDate(date, index)}>
                                            {date}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        }

                        <p class="sub">
                            You  will reserve this table  only for one  hour, for more time please contact the restaurant.
                        </p>
                        {
                            date == null ? <button class="passiveCompletet">Complete the Reservation</button> :
                            <div>
                                <button onClick={() => setIsModalOpen(true)} class="completet">Complete the Reservation</button>
                                <ReserveModal time={date} city={restaurant.address.city} country={restaurant.address.country} street={restaurant.address.street} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                            </div>
                        }
                        
                    </div>
                </form>
            </div>
            )}
        </div>

        {restaurant && (
            <div className="review-sec">
                <ReviewList restaurantName={restaurant.name} />
            </div>
        )}
        </>
    )
}