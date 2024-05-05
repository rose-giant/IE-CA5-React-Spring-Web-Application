import React from "react"
import { useContext } from "react"
import "./../Home/home.css"
import { Context } from "../../App"

export default function Email({email}) {
    const [signedIn, setSignedIn] = useContext(Context)

    return (
        <div class="inline-cell notif">
            <div class="content">
                <p class="text">Your reservations are also emailed to   </p>
                <a class="red" href="mailto:Tom_holland@ut.ac.ir"> {email} </a>
            </div>
            &nbsp;
            <div>
                <a class="red-btn btn" href="">Logout</a>
            </div>
        </div>
    )
}