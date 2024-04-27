import React from "react"

export default function Register() {
    return(
        <>
             <form action="">
                <label htmlFor="username">Username</label>
                <input type="text" />

                <label htmlFor="email">Email</label>
                <input type="email" />

                <label htmlFor="country">Country</label>
                <input type="text" />

                <label htmlFor="city">City</label>
                <input type="text" />

                <label htmlFor="password">Password</label>
                <input type="password" />

                <label htmlFor="">I'm a new &nbsp;</label>
                <label htmlFor="Customer">Customer</label>
                <input type="radio" id="c"/>
                <label htmlFor="Manager">Manager</label>
                <input type="radio" id="m"/>

                <button type="submit">Register</button>
            </form>
        </>
    )
}