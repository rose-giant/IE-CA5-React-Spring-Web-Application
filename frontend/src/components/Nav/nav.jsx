import React from "react"
import { useContext } from "react"
import "./../Home/home.css"
import { Context } from "../../App"
import { useNavigate } from "react-router-dom"

export default function Nav() {
    const [signedIn, setSignedIn] = useContext(Context)
    const navigate = useNavigate()
    const handleNavigation = () => {
        navigate("/")
    }

    return (
        <nav class="navbar px-5 py-2">
            <div class="nav-left">
                <a class="navbar-brand" onClick={handleNavigation}>
                    <img class="logo" src="./logo/logo.png" alt="" />

                    <p class="nav-title">
                        Reserve Table From Anywhere!
                    </p>
                </a>
            </div>

            <div class="nav-right">
            {
                signedIn === "" ? "" :
                <p>Hello {signedIn}!</p> 
            }
            <button class="btn nav-btn">Reserve Now!</button>
            </div>
        </nav>
    )
}