import React, { useContext } from "react"
import { Context } from "../../App"

export default function Manager() {
    const [signedIn, setSignedIn] = useContext(Context)
    return(
        <>
        {
            signedIn === "" ? "yes" : "sure thing!"
        }
        </>
    )
}