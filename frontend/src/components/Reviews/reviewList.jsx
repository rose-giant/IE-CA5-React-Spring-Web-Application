import React from "react"
import ReviewItem from "./reviewItem"
import axios from "axios"
import { useState, useEffect } from "react"
import "./reviews.css"
import ReviewModal from "./../Helpers/testmodal"
import { useContext } from "react"
import { Context } from "../../App"

export default function ReviewList({ restaurantName }) {
    const [singedIn, setSignedIn] = useContext(Context)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [reviews, setreviews] = useState([])
    let aveOverall = 0
    let aveAmb = 0
    let aveServ = 0
    let aveFood = 0
    let sumAmb = 0
    let sumFood = 0
    let sumServ = 0
    let sumOverall = 0
    let tempList = []

    const findTargetRest = (allReviews) => {
        allReviews.forEach(item => {
            if (String(item.restaurantName).valueOf().trim() == String(restaurantName).valueOf().trim()) {
                tempList.push(item)
            }
        })

        setreviews(tempList)
        reviews.forEach(item => {    
            sumAmb = sumAmb + item.ambianceRate
            sumFood += item.foodRate
            sumServ += item.serviceRate
            sumOverall += item.overallRate
        })

        const len = reviews.length 
        aveOverall = sumOverall / len
        aveAmb = sumAmb / len
        aveFood = sumFood / len
        aveServ = sumServ / len
    }

    useEffect(() => {
        axios.get("http://localhost:8080/reviews")
          .then(response => {
            findTargetRest(response.data)
          })
          .catch(error => {
            console.error("Error fetching reviews:", error)
          })
      }, [reviews])

    return(
        <>
            <div class="review-sec">
                <div class="overview">
                    <div class="left">
                        <p class="title">What 160 people are saying</p>
                        <div class="rating">
                            <div class="stars">
                               <img src="./rating.png" />
                            </div>

                            <div class="rating-sub">
                                4 based on recent ratings
                            </div>
                        </div>
                        <button className="add-rev-btn" onClick={() => setIsModalOpen(true)}>Add Review</button>
                        <ReviewModal restaurantName={restaurantName} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                    </div>
                    <div class="right">
                    <ul>
                        <li>
                            <p class="category">
                                Food
                            </p>
                            <p class="rating">
                                {aveFood}
                            </p>
                        </li>
                        <li>
                            <p class="category">
                                Service
                            </p>
                            <p class="rating">
                                {aveServ}
                            </p>
                        </li>
                        <li>
                            <p class="category">
                                Ambiance
                            </p>
                            <p class="rating">
                                {aveAmb}
                            </p>
                        </li>
                        <li>
                            <p class="category">
                                Overall
                            </p>
                            <p class="rating">
                                {aveOverall}
                            </p>
                        </li>   
                    </ul>
                </div>
                </div>
                <div className="reviews">
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}>
                            <ReviewItem review={review}/>
                        </li>
                    ))}
                </ul>
                </div>
            </div>            
        </>
    )
}