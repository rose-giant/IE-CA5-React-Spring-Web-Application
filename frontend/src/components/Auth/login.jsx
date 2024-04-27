import React from "react"

export default function Login() {

    return(
        <>
            <form action="">
                <label htmlFor="username">Username</label>
                <input type="text" />

                <label htmlFor="password">Password</label>
                <input type="password" />

                <button type="submit">Login</button>
            </form>
        </>
    )
}