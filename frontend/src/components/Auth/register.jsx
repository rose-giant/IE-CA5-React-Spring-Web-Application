import React, { useState } from "react"
import { useContext } from "react"
import { Context } from "../../App"
import { useNavigate } from "react-router-dom"

export default function Register() {
    const [signedIn, setSignedIn, role, setRole] = useContext(Context)
    const [name, setName] = useState("")
    const navigate = useNavigate()

    const registerSubmit = (e) => {
        e.preventDefault()
        console.log(name)
        setSignedIn(name)
        navigate("/home")
    }

    return(
        <>
             <form className="form-cotrol" onSubmit={registerSubmit} action="">
                <label htmlFor="username" >Username</label>
                <input required className="input-group" type="text"
                    onChange={(e) => setName(e.target.value)}/>

                <label htmlFor="email">Email</label>
                <input required className="input-group" type="email" />

                <label htmlFor="country">Country</label>
                <input required className="input-group" type="text" />

                <label htmlFor="city">City</label>
                <input required className="input-group" type="text" />

                <label htmlFor="password">Password</label>
                <input required className="input-group" type="password" />

                <div className="radios">
                        <label htmlFor="I'm a new Customer">Customer</label>
                        <input className="input-group" type="radio" id="c"
                        onChange={(e) => setRole("customer")}/>

                        <label htmlFor="Manager">Manager</label>
                        <input className="input-group" type="radio" id="m"
                        onChange={(e) => setRole("manager")}/>
                </div>
                <button type="submit">Register</button>
            </form>
        </>
    )
}