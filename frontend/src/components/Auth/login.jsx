import React, { useState } from "react"
import { useContext } from "react"
import { Context } from "../../App"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Login() {
    const [user, setUser] = useState()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [signedIn, setSignedIn] = useContext(Context)
    const navigate = useNavigate()

    const findTargetUser = (lsit) => {
        lsit.forEach(item => {
            if(String(item.username).valueOf() == String(username).valueOf() && 
                String(item.password).valueOf() == String(password).valueOf()) {
                setUser(item)
                setSignedIn(username)
            }
        })``
    }

    // "password": "Razieh_DorehGard_1234",
    // "username": "Razieh_DorehGard"

    const handleLogin = (e) => {
        e.preventDefault()
        axios.get("http://localhost:8080/users")
        .then(response => {
          findTargetUser(response.data)
        })
        .catch(error => {
          console.error("Error fetching reviews:", error)
        })
    }

    return(
        <>
            <form className="form-cotrol" action="" onSubmit={handleLogin}>
                <label htmlFor="username">Username</label>
                <input required onChange={(e) => setUsername(e.target.value)} className="input-group" type="text" />

                <label htmlFor="password">Password</label>
                <input required className="input-group" onChange={(e) => setPassword(e.target.value)} type="password" />

                <button type="submit">Login</button>
            </form>
        </>
    )
}