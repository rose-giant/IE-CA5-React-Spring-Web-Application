import React, { useState } from "react"
import Login from "./login"
import Register from "./register"

export default function InitUser() {
    const [userState, setUserState] = useState()
    const handleLoginClick = () => {
        setUserState("login");
    }

    const handleRegisterClick = () => {
        setUserState("register");
    }

    return(
        <>
            <div>
                <button onClick={handleLoginClick}>Login</button>
                <button onClick={handleRegisterClick}>Register</button>
            </div>

            {userState === "login" ? <Login /> : <Register />}
        </>
    )
}