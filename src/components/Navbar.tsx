import React from "react";
import d from "./Navbar.module.css"

export const Navbar = () => {
    return (<nav className={d.nav}>
            <div className={d.item}><a>Profile</a></div>
            <div className={d.item}><a>Messages</a></div>
            <div className={d.item}><a>News</a></div>
            <div className={d.item}><a>Music</a></div>
            <div className={d.item}><a>Settings</a></div>

        </nav>

    )
}