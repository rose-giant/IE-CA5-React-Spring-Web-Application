import "./restaurantcard.css"
import { IsOpen } from "../Helpers/isOpen"
import { useNavigate } from "react-router-dom"

export default function RestaurantCard({ restaurant }) {
    const navigate = useNavigate()
    const hello = () => {
        navigate(`restaurant/${restaurant.name}/`)
    }
        
    return(
        <>
            <div class="card">
                    <div class="body">
                        {/* <div class="pancreas">
                            <img id="star" src="./icons/svg/pinkstar.svg" alt=""/>
                            <img id="star" src="./icons/svg/pinkstar.svg" alt=""/>
                            <img id="star" src="./icons/svg/pinkstar.svg" alt=""/>
                            <img id="star" src="./icons/svg/pinkstar.svg" alt=""/>
                            <img id="star" src="./icons/svg/pinkstar.svg" alt=""/>
                        </div> */}
                        <img src={restaurant.image} alt=""/>
                    </div>

                    <div class="card-footer">
                        <p onClick={hello}>
                        <p class="title">
                            {restaurant.name}
                        </p>
                        </p>
                        <p class="reviews">
                            2096 &nbsp; reviews
                        </p>
                        <p className="type">
                            {restaurant.type}
                        </p>
                        <p class="place">                        
                            <p class="location">
                                <img class="icon location-icon" src="./icons/location.png" alt=""/>
                                <p>{restaurant.address.city}</p>
                            </p>
                        </p>

                        <p class="open">
                            <span class="open-span">
                                {IsOpen(restaurant.startTime, restaurant.endTime) ? 
                                    `Open. Closes at ${restaurant.endTime}` :
                                    `Closed. Opens at ${restaurant.startTime}`
                                } &nbsp;&nbsp;&nbsp;
                            </span>
                        </p>

                    </div>
                </div>
        </>
    )
}