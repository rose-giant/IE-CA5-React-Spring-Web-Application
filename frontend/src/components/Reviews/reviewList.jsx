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

    const findAverages = () => {
        if (reviews.length != 0) {
            let sumAmb = 0
            let sumServ = 0
            let sumOverall = 0
            let sumFood = 0
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
            console.log(sumOverall, aveOverall)
        }
    }

    const findTargetRest = () => {
        reviews.forEach(item => {
            if (String(item.restaurantName).valueOf().trim() == String(restaurantName).valueOf().trim()) {
                tempList.push(item)
            }
        })
        setreviews(tempList)
    }

    const setFakes = () => {
        const listie = [{"ambianceRate":4,"comment":"Enjoyed a pleasant dinner at Sullivan's. The steak was cooked perfectly, and the service was attentive. The ambiance was nice and cozy. Overall, a good experience.","foodRate":4,"overallRate":4,"restaurantName":"Sullivan's Steakhouse","serviceRate":3,"username":"MohammadMehdi_Jafari"},{"ambianceRate":5,"comment":"Eddie Merlot's exceeded expectations! The steak was incredible, and the service was top-notch. The ambiance was perfect for a special evening out.","foodRate":5,"overallRate":5,"restaurantName":"Eddie Merlot's Prime Aged Beef & Seafood","serviceRate":4,"username":"Kasri_HajiHeidari"},{"ambianceRate":4,"comment":"Had a lovely time at The Winery. The food was delicious, and the wine selection was impressive. Excellent service added to the overall enjoyment.","foodRate":4,"overallRate":4,"restaurantName":"The Winery Restaurant & Wine Bar","serviceRate":5,"username":"Marzieh_Hariri"},{"ambianceRate":3,"comment":"Et Voil\u00e0! had a charming atmosphere. The food was decent, but the service was attentive. Overall, a nice experience.","foodRate":3,"overallRate":3,"restaurantName":"Et Voil\u00e0!","serviceRate":4,"username":"Melika_HeidariDastjerdi"},{"ambianceRate":4,"comment":"North Italia offers delicious Italian cuisine. The service was exceptional, and the ambiance was lively. Will definitely visit again!","foodRate":4,"overallRate":4,"restaurantName":"North Italia","serviceRate":5,"username":"AmirMohammad_Khodaei"},{"ambianceRate":2,"comment":"Disappointing experience at KUJIRA. The food was mediocre, and the service was slow. Ambiance was underwhelming. Not recommended.","foodRate":2,"overallRate":2,"restaurantName":"KUJIRA","serviceRate":3,"username":"Razieh_DorehGard"},{"ambianceRate":4,"comment":"Braven offers a great selection of craft beers. The food was tasty, and the service was efficient. Enjoyed the laid-back ambiance.","foodRate":4,"overallRate":4,"restaurantName":"Braven","serviceRate":4,"username":"Shahab_Rakhsha"},{"ambianceRate":4,"comment":"BREW+BLOOM is a hidden gem! The coffee was exceptional, and the brunch menu was delightful. Friendly staff and cozy atmosphere.","foodRate":5,"overallRate":5,"restaurantName":"BREW+BLOOM","serviceRate":5,"username":"MohammadHossien_Rezayati"},{"ambianceRate":4,"comment":"Zukaya offers authentic flavors. The service was attentive, and the ambiance was cozy. Enjoyed the dining experience.","foodRate":4,"overallRate":4,"restaurantName":"Zukaya","serviceRate":4,"username":"Fatimeh_Sharifi"},{"ambianceRate":5,"comment":"Charlot is a fantastic French restaurant. The food was exquisite, and the service was impeccable. The ambiance was elegant and charming.","foodRate":5,"overallRate":5,"restaurantName":"Charlot","serviceRate":5,"username":"AmirAli_Shahriary"},{"ambianceRate":4,"comment":"Had a pleasant evening at Restaurant Opera. The food was good, but the service was a bit slow. The ambiance was classy.","foodRate":4,"overallRate":4,"restaurantName":"Restaurant Opera","serviceRate":3,"username":"Ahoora_Shiri"},{"ambianceRate":3,"comment":"Nomad offers an interesting menu. The service was decent, but the ambiance could be improved. Average dining experience.","foodRate":3,"overallRate":3,"restaurantName":"Nomad","serviceRate":4,"username":"MohammadSaid_Sedighi"},{"ambianceRate":4,"comment":"Tarantella serves authentic Italian cuisine. The food was delicious, and the service was prompt. Enjoyed the cozy atmosphere.","foodRate":4,"overallRate":4,"restaurantName":"Tarantella","serviceRate":4,"username":"Ali_Abedini"},{"ambianceRate":5,"comment":"MAJOR TOM is a must-visit! The food and service were exceptional, and the ambiance was out of this world. A memorable dining experience.","foodRate":5,"overallRate":5,"restaurantName":"MAJOR TOM","serviceRate":5,"username":"Ali_Ataollahi"},{"ambianceRate":4,"comment":"Ten Foot Henry offers innovative dishes. The service was excellent, and the ambiance was lively. Will definitely return!","foodRate":4,"overallRate":4,"restaurantName":"Ten Foot Henry","serviceRate":5,"username":"FatimaZahra_Broumandnia"},{"ambianceRate":3,"comment":"Tried The Commoner for brunch. The food was okay, but the service could have been better. The ambiance was lively and casual.","foodRate":3,"overallRate":3,"restaurantName":"The Commoner","serviceRate":4,"username":"SeyedAmirhosien_Vahdat"},{"ambianceRate":4,"comment":"Visited Sullivan's Steakhouse for a special occasion. The steak was delicious, and the service was excellent. Enjoyed the classy ambiance.","foodRate":4,"overallRate":4,"restaurantName":"Sullivan's Steakhouse","serviceRate":5,"username":"AmirAli_VahidiNogan"},{"ambianceRate":5,"comment":"Eddie Merlot's never disappoints! The food was superb, and the service was outstanding. The ambiance was perfect for a celebratory dinner.","foodRate":5,"overallRate":5,"restaurantName":"Eddie Merlot's Prime Aged Beef & Seafood","serviceRate":5,"username":"Matin_Nabizadeh"},{"ambianceRate":4,"comment":"Had a great time at The Winery. The food was delicious, and the wine selection was impressive. The service was attentive.","foodRate":4,"overallRate":4,"restaurantName":"The Winery Restaurant & Wine Bar","serviceRate":4,"username":"SeyedMohammad_Naghshbandi"},{"ambianceRate":4,"comment":"Et Voil\u00e0! offers authentic French cuisine. The food was decent, but the service was slow. The ambiance was cozy and rustic.","foodRate":3,"overallRate":3,"restaurantName":"Et Voil\u00e0!","serviceRate":3,"username":"Ali_Hodaei"},{"ambianceRate":4,"comment":"North Italia is a great spot for Italian food. The pasta dishes were delicious, and the service was excellent. Lively atmosphere.","foodRate":4,"overallRate":4,"restaurantName":"North Italia","serviceRate":5,"username":"SeyedHamid_MiramlrKhan"},{"ambianceRate":2,"comment":"Disappointed with KUJIRA. The food was mediocre, and the service was slow. The ambiance was lacking atmosphere.","foodRate":2,"overallRate":2,"restaurantName":"KUJIRA","serviceRate":3,"username":"Parsa_Nassery"},{"ambianceRate":4,"comment":"Braven is a cool spot with great cocktails. The food was tasty, and the service was friendly. Enjoyed the laid-back ambiance.","foodRate":4,"overallRate":4,"restaurantName":"Braven","serviceRate":4,"username":"Mohammad_Sadeghi"},{"ambianceRate":5,"comment":"BREW+BLOOM is my favorite coffee place! The coffee is always exceptional, and the brunch menu is fantastic. Cozy atmosphere.","foodRate":5,"overallRate":5,"restaurantName":"BREW+BLOOM","serviceRate":5,"username":"Misagh_Mohaghegh"},{"ambianceRate":3,"comment":"Earls Kitchen + Bar has a lively vibe. The food was decent, but the service could be more attentive during busy hours. Average experience.","foodRate":3,"overallRate":3,"restaurantName":"Earls Kitchen + Bar","serviceRate":4,"username":"Fatima_Mohammadi"},{"ambianceRate":5,"comment":"Casa De Ros\u00e9 is perfect for a romantic dinner. The food was delicious, and the service was good. Lovely ambiance.","foodRate":4,"overallRate":4,"restaurantName":"Casa De Ros\u00e9","serviceRate":4,"username":"Soghol_MohammadiToucheye"},{"ambianceRate":4,"comment":"Visited Restaurant Club Social Mexicano with friends. The food was average, and the service was a bit slow. Vibrant atmosphere.","foodRate":3,"overallRate":3,"restaurantName":"Restaurant Club Social Mexicano","serviceRate":3,"username":"Ali_Momtahen"},{"ambianceRate":4,"comment":"Zukaya offers unique flavors. The service was attentive, and the ambiance was cozy. Enjoyed the dining experience.","foodRate":4,"overallRate":4,"restaurantName":"Zukaya","serviceRate":4,"username":"Sana_Sarinavai"},{"ambianceRate":5,"comment":"Charlot is a gem! The food was outstanding, and the service was top-notch. Loved the charming ambiance.","foodRate":5,"overallRate":5,"restaurantName":"Charlot","serviceRate":5,"username":"Fatima_Shahhosseini"},{"ambianceRate":4,"comment":"Had a wonderful dining experience at Restaurant Opera. The food was delicious, and the service was impeccable. Elegant ambiance.","foodRate":4,"overallRate":4,"restaurantName":"Restaurant Opera","serviceRate":5,"username":"Arash_Shahin"},{"ambianceRate":3,"comment":"Nomad offers exotic dishes. The food was decent, but the service was slow at times. Interesting ambiance.","foodRate":3,"overallRate":3,"restaurantName":"Nomad","serviceRate":4,"username":"Mohammad_Fateh"},{"ambianceRate":4,"comment":"Tarantella is a cozy Italian restaurant. The food was tasty, and the service was friendly. Nice ambiance for a casual meal.","foodRate":4,"overallRate":4,"restaurantName":"Tarantella","serviceRate":4,"username":"AmirMehdi_Farzane"},{"ambianceRate":5,"comment":"MAJOR TOM is a must-visit! The food and service were exceptional, and the ambiance was out of this world. A memorable dining experience.","foodRate":5,"overallRate":5,"restaurantName":"MAJOR TOM","serviceRate":5,"username":"MohammadHossien_Aqili"},{"ambianceRate":4,"comment":"Ten Foot Henry offers innovative dishes. The service was excellent, and the ambiance was lively. Will definitely return!","foodRate":4,"overallRate":4,"restaurantName":"Ten Foot Henry","serviceRate":5,"username":"Ali_GhanbariGarji"},{"ambianceRate":4,"comment":"Sullivan's Steakhouse has a classic vibe. The food was decent, but the service could have been more attentive. Good for special occasions.","foodRate":3,"overallRate":3,"restaurantName":"Sullivan's Steakhouse","serviceRate":3,"username":"Moein_Karami"},{"ambianceRate":5,"comment":"Eddie Merlot's is the best place for steak and seafood! The food and service exceeded my expectations. Elegant ambiance.","foodRate":5,"overallRate":5,"restaurantName":"Eddie Merlot's Prime Aged Beef & Seafood","serviceRate":5,"username":"Amirhosien_Kahrobayian"},{"ambianceRate":4,"comment":"The Winery Restaurant & Wine Bar is perfect for wine lovers. The food was delicious, and the service was friendly. Relaxed ambiance.","foodRate":4,"overallRate":4,"restaurantName":"The Winery Restaurant & Wine Bar","serviceRate":4,"username":"Ali_Lotfollahee"},{"ambianceRate":4,"comment":"Et Voil\u00e0! offers authentic French cuisine. The food was flavorful, and the service was attentive. Cozy atmosphere.","foodRate":4,"overallRate":4,"restaurantName":"Et Voil\u00e0!","serviceRate":4,"username":"Mohammad_Sadeghi"},{"ambianceRate":5,"comment":"North Italia is a great spot for Italian food. The pasta dishes were delicious, and the service was excellent. Lively atmosphere.","foodRate":5,"overallRate":5,"restaurantName":"North Italia","serviceRate":5,"username":"Misagh_Mohaghegh"},{"ambianceRate":2,"comment":"Disappointed with KUJIRA. The food was mediocre, and the service was slow. The ambiance was lacking atmosphere.","foodRate":2,"overallRate":2,"restaurantName":"KUJIRA","serviceRate":3,"username":"Fatima_Mohammadi"},{"ambianceRate":4,"comment":"Braven is a cool spot with great cocktails. The food was tasty, and the service was friendly. Enjoyed the laid-back ambiance.","foodRate":4,"overallRate":4,"restaurantName":"Braven","serviceRate":4,"username":"Soghol_MohammadiToucheye"},{"ambianceRate":5,"comment":"BREW+BLOOM is my favorite coffee place! The coffee is always exceptional, and the brunch menu is fantastic. Cozy atmosphere.","foodRate":5,"overallRate":5,"restaurantName":"BREW+BLOOM","serviceRate":5,"username":"Ali_Momtahen"},{"ambianceRate":3,"comment":"Earls Kitchen + Bar has a lively vibe. The food was decent, but the service could be more attentive during busy hours. Average experience.","foodRate":3,"overallRate":3,"restaurantName":"Earls Kitchen + Bar","serviceRate":4,"username":"Sana_Sarinavai"},{"ambianceRate":5,"comment":"Casa De Ros\u00e9 is perfect for a romantic dinner. The food was delicious, and the service was good. Lovely ambiance.","foodRate":4,"overallRate":4,"restaurantName":"Casa De Ros\u00e9","serviceRate":4,"username":"Fatima_Shahhosseini"},{"ambianceRate":4,"comment":"Visited Restaurant Club Social Mexicano with friends. The food was average, and the service was a bit slow. Vibrant atmosphere.","foodRate":3,"overallRate":3,"restaurantName":"Restaurant Club Social Mexicano","serviceRate":3,"username":"Arash_Shahin"},{"ambianceRate":4,"comment":"The Commoner is a delightful spot! The food was excellent, and the service was impeccable. Cozy ambiance perfect for brunch.","foodRate":4,"overallRate":4,"restaurantName":"The Commoner","serviceRate":5,"username":"SeyedAmirhosien_Vahdat"},{"ambianceRate":3,"comment":"Visited The Commoner for dinner. The food was decent, but the service could have been more attentive. Casual atmosphere.","foodRate":3,"overallRate":3,"restaurantName":"The Commoner","serviceRate":4,"username":"AmirAli_VahidiNogan"},{"ambianceRate":4,"comment":"The Commoner exceeded my expectations! The food was amazing, and the service was top-notch. Lively atmosphere.","foodRate":5,"overallRate":5,"restaurantName":"The Commoner","serviceRate":5,"username":"Matin_Nabizadeh"},{"ambianceRate":4,"comment":"Had a wonderful brunch experience at The Commoner. The food was delicious, and the service was friendly. Relaxed vibe.","foodRate":4,"overallRate":4,"restaurantName":"The Commoner","serviceRate":4,"username":"SeyedMohammad_Naghshbandi"},{"ambianceRate":3,"comment":"The Commoner offers a decent brunch menu. The food was average, and the service was a bit slow. Cozy atmosphere.","foodRate":3,"overallRate":3,"restaurantName":"The Commoner","serviceRate":3,"username":"Ali_Hodaei"},{"ambianceRate":4,"comment":"Sullivan's Steakhouse is a classic choice for steak. The food was delicious, and the service was impeccable. Elegant ambiance.","foodRate":4,"overallRate":4,"restaurantName":"Sullivan's Steakhouse","serviceRate":5,"username":"AmirAli_VahidiNogan"},{"ambianceRate":4,"comment":"Sullivan's Steakhouse has a nice ambiance. The food was decent, but the service could have been better. Good for special occasions.","foodRate":3,"overallRate":3,"restaurantName":"Sullivan's Steakhouse","serviceRate":3,"username":"Moein_Karami"},{"ambianceRate":4,"comment":"Enjoyed a lovely dinner at Sullivan's Steakhouse. The steak was flavorful, and the service was friendly. Classic steakhouse atmosphere.","foodRate":4,"overallRate":4,"restaurantName":"Sullivan's Steakhouse","serviceRate":4,"username":"Ali_Momtahen"},{"ambianceRate":3,"comment":"Visited Sullivan's Steakhouse for a special occasion. The food was okay, but the service could have been more attentive. Classic setting.","foodRate":3,"overallRate":3,"restaurantName":"Sullivan's Steakhouse","serviceRate":4,"username":"SeyedMohammad_Naghshbandi"},{"ambianceRate":5,"comment":"Sullivan's Steakhouse never disappoints! The steak was cooked perfectly, and the service was outstanding. Elegant and classy ambiance.","foodRate":5,"overallRate":5,"restaurantName":"Sullivan's Steakhouse","serviceRate":5,"username":"Matin_Nabizadeh"},{"ambianceRate":5,"comment":"Eddie Merlot's is my go-to for steak! The food and service were exceptional, and the ambiance was perfect for a special dinner.","foodRate":5,"overallRate":5,"restaurantName":"Eddie Merlot's Prime Aged Beef & Seafood","serviceRate":5,"username":"Amirhosien_Kahrobayian"},{"ambianceRate":4,"comment":"Had a wonderful dining experience at Eddie Merlot's. The steak was delicious, and the service was attentive. Upscale ambiance.","foodRate":4,"overallRate":4,"restaurantName":"Eddie Merlot's Prime Aged Beef & Seafood","serviceRate":4,"username":"SeyedAmirhosien_Vahdat"},{"ambianceRate":4,"comment":"Eddie Merlot's never disappoints! The steak was cooked perfectly, and the service was excellent. Elegant and upscale atmosphere.","foodRate":4,"overallRate":4,"restaurantName":"Eddie Merlot's Prime Aged Beef & Seafood","serviceRate":5,"username":"Ali_GhanbariGarji"},{"ambianceRate":5,"comment":"Celebrated a special occasion at Eddie Merlot's. The food, service, and ambiance were outstanding. Highly recommend for steak lovers!","foodRate":5,"overallRate":5,"restaurantName":"Eddie Merlot's Prime Aged Beef & Seafood","serviceRate":5,"username":"Matin_Nabizadeh"},{"ambianceRate":5,"comment":"Eddie Merlot's is the epitome of fine dining! The steak was exceptional, and the service was impeccable. Upscale and elegant atmosphere.","foodRate":5,"overallRate":5,"restaurantName":"Eddie Merlot's Prime Aged Beef & Seafood","serviceRate":5,"username":"MohammadHossien_Aqili"}]

       
        listie.forEach(item => {
            if(String(item.restaurantName).valueOf().trim() == restaurantName) {
                sumAmb = sumAmb + item.ambianceRate
                sumFood += item.foodRate
                sumServ += item.serviceRate
                sumOverall += item.overallRate
                reviews.push(item)
            }
        })

        const len = reviews.length 
        aveOverall = sumOverall / len
        aveAmb = sumAmb / len
        aveFood = sumFood / len
        aveServ = sumServ / len
    }

    useEffect(() => {
        // axios.get("http://91.107.137.117:55/reviews")
        //   .then(response => {
        //     setreviews(response.data)
        //   })
        //   .catch(error => {
        //     console.error("Error fetching reviews:", error);
        //   });

        setFakes()
        findAverages()
      }, [])

    return(
        <>
            <div class="review-sec">

                <div class="overview">
                    <div class="left">
                        <p class="title">What 160 people are saying</p>
                        <div class="rating">
                            <div class="stars">
                                <img class="staricon" src="./../icons/svg/pinkstar.svg" alt=""/>
                                <img class="staricon" src="./../icons/svg/pinkstar.svg" alt=""/>
                                <img class="staricon" src="./../icons/svg/pinkstar.svg" alt=""/>
                                <img class="staricon" src="./../icons/svg/pinkstar.svg" alt=""/>
                                <img class="staricon" src="./../icons/svg/star-rate-rating-outline-svgrepo-com.svg" alt=""/>
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