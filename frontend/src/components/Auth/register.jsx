// import React from "react"
// import { useState} from "react"
// import Context from "./../../App"
// import { useContext } from "react"

// export default function Register() {
//     const [signedIn, setSignedIn] = useContext(Context)
//     // const navigate = useNavigate()
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         country: '',
//         city: '',
//         password: '',
//         userType: '',
//       })
    
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value })
//       }
    
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);
//         setSignedIn(formData['username'])
//         // navigate("/")
//       }

//     return(
//         <>
//             <form className="form-cotrol" onSubmit={handleSubmit}>
//                 <label htmlFor="username">Username</label>
//                 <input
//                     className="input-group"
//                     type="text"
//                     name="username"
//                     value={formData.username}
//                     onChange={handleChange}
//                 />

//                 <label htmlFor="email">Email</label>
//                 <input
//                     className="input-group"
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                 />

//                 <label htmlFor="country">Country</label>
//                 <input
//                     className="input-group"
//                     type="text"
//                     name="country"
//                     value={formData.country}
//                     onChange={handleChange}
//                 />

//                 <label htmlFor="city">City</label>
//                 <input
//                     className="input-group"
//                     type="text"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                 />

//                 <label htmlFor="password">Password</label>
//                 <input
//                     className="input-group"
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                 />

//                 <div className="radios">
//                     <label htmlFor="customer">Customer</label>
//                     <input
//                     className="input-group"
//                     type="radio"
//                     id="c"
//                     name="userType"
//                     value="customer"
//                     onChange={handleChange}
//                     />

//                     <label htmlFor="manager">Manager</label>
//                     <input
//                     className="input-group"
//                     type="radio"
//                     id="m"
//                     name="userType"
//                     value="manager"
//                     onChange={handleChange}
//                     />
//                 </div>
//                 <button type="submit">Register</button>
//                 </form>
//         </>
//     )
// }
import React, { useState } from "react"
import { useContext } from "react"
import { Context } from "../../App"
import { useNavigate } from "react-router-dom"

export default function Register() {
    const [signedIn, setSignedIn] = useContext(Context)
    const [name, setName] = useState("")
    const navigate = useNavigate()

    const registerSubmit = (e) => {
        e.preventDefault()
        console.log(name)
        setSignedIn(name)
        navigate("/")
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
                        <input className="input-group" type="radio" id="c"/>

                        <label htmlFor="Manager">Manager</label>
                        <input className="input-group" type="radio" id="m"/>
                </div>
                <button type="submit">Register</button>
            </form>
        </>
    )
}