import React from "react";
import { IsOpen } from "../Helpers/isOpen";
import "./detail.css"
import ReviewList from "../Reviews/reviewList";

export default function RestaurantDetail({ restaurant }) {
    console.log(restaurant)
    return(
        <>
        <div class="contain">
            <div class="card show">
                <div class="header">
        
                </div>
        
                <div class="body">
                    <img src="./banners/rest1.png" alt="" />
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
            </div>

            <div class="reserve">
                <p class="title">Reserve Table</p>

                <form action="">
                    <div class="top">
                        <label for="for">For&nbsp;</label>
                        <select class="enter" name="for" id="for">
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
                        <ul>
                            <li>
                                <button>
                                        11:00 PM
                                </button>
                            </li>
                            <li>
                                <button>
                                        12:00 PM
                                </button>
                            </li>
                            <li>
                                <button>
                                        13:00 PM
                                </button>
                            </li>
                            <li>
                                <button>
                                        14:00 PM
                                </button>
                            </li>
                            <li>
                                <button>
                                        15:00 PM
                                </button>
                            </li>
                            <li>
                                <button>
                                        18:00 PM
                                </button>
                            </li>
                            <li>
                                <button>
                                        19:00 PM
                                </button>
                            </li>
                            <li>
                                <button>
                                        20:00 PM
                                </button>
                            </li>
                        </ul>

                        <p class="sub">
                            You  will reserve this table  only for one  hour, for more time please contact the restaurant.
                        </p>

                        <button class="completet">Complete the Reservation</button>
                    </div>
                </form>
            </div>
        </div>

        <ReviewList restaurantName={restaurant.name} />
        </>
    )
}