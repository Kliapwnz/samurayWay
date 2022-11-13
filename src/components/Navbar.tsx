import React from "react";
import d from "./Navbar.module.css"

export const Navbar = () => {
    return (<nav className={d.nav}>
            <div className={`${d.item} ${d.active}`}><a>Profile</a></div>
            <div className={`${d.item} ${d.active}`}><a>Messages</a></div>
            <div className={`${d.item} ${d.active}`}><a>News</a></div>
            <div className={`${d.item} ${d.active}`}><a>Music</a></div>
            <div className={`${d.item} ${d.active}`}><a>Settings</a></div>

        </nav>

    )
}