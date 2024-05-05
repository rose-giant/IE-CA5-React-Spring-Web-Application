import React from "react"
import { useContext } from "react"
import "./../Home/home.css"
import { Context } from "../../App"

export default function Email({email}) {
    const [signedIn, setSignedIn] = useContext(Context)

    return (
        <div className="inline-cell notif">
            <div className="content">
                <p className="text">Your reservations are also emailed to   </p>
                <a className="red" href="mailto:Tom_holland@ut.ac.ir"> {email} </a>
            </div>
            &nbsp;
            <div>
                <a className="red-btn btn" href="">Logout</a>
            </div>
        </div>
    )
}