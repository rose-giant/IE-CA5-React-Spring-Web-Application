import React from "react";
import Nav from "../Nav/nav";
import Hero from "./hero";
import "./home.css"
import About from "./about";
import RestaurantList from "./restaurantlist";

export default function Home() {
    return(
        <div className="homeContainer">
            {/* <Nav />
            <Hero /> */}
            <RestaurantList />
            {/* <About /> */}
        </div>
    )
}