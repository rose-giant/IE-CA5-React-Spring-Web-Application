import React from "react"

export default function Nav() {
    return (
        <nav class="navbar px-5 py-2">
            <div class="nav-left">
                <a class="navbar-brand" href="./../Home/home.html">
                    <img class="logo" src="./logo/logo.png" alt="" />

                    <p class="nav-title">
                        Reserve Table From Anywhere!
                    </p>
                </a>
            </div>

            <div class="nav-right">
                <button class="btn nav-btn">Reserve Now!</button>
            </div>

        </nav>
    )
}