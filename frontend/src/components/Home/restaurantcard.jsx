import React from "react"
import "./restaurantcard.css"

export default function RestaurantCard() {
    return(
        <>
            <div class="card">
                    <div class="header">

                    </div>

                    <div class="body">
                        {/* <div class="pancreas">
                            <img id="star" src="./icons/svg/pinkstar.svg" alt=""/>
                            <img id="star" src="./icons/svg/pinkstar.svg" alt=""/>
                            <img id="star" src="./icons/svg/pinkstar.svg" alt=""/>
                            <img id="star" src="./icons/svg/pinkstar.svg" alt=""/>
                            <img id="star" src="./icons/svg/pinkstar.svg" alt=""/>
                        </div> */}
                        <img src="./cards/rest1.png" alt=""/>
                    </div>

                    <div class="card-footer">
                        <p class="title">
                            The Ivy Brasserie
                        </p>
                        <p class="reviews">
                            2096 reviews
                        </p>
                        <p class="place">
                            Contemporary British

                        <p class="location">
                            <img class="icon location-icon" src="./icons/svg/location-pin-svgrepo-com.svg" alt=""/>
                            Tehran
                        </p>
                        </p>

                        <p class="open">
                            <span class="open-span">Open .</span>
                            Closes at 11 PM
                        </p>
                    </div>
                </div>
        </>
    )
}