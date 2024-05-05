import React from "react"
import { useContext } from "react"
import "./../Home/home.css"
import { Context } from "../../App"

export default function ManagerNav() {
    const [signedIn, setSignedIn] = useContext(Context)

    return (
        <nav className="navbar px-5 py-2">
            <div className="nav-left">
                <a className="navbar-brand" href="/">
                    <img className="logo" src="./logo/logo.png" alt="" />

                    <p className="nav-title">
                        Reserve Table From Anywhere!
                    </p>
                </a>
            </div>

            <div className="nav-right">
            {
                signedIn === "" ? "" :
                <p>Welcome {signedIn}!</p> 
            }
            <button className="btn nav-btn">My Restaurants</button>
            </div>
        </nav>
    )
}