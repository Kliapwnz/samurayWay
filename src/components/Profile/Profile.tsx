import React from "react";
import w from "./Profile.module.css"

export const Profile = () => {
    return (
        <div className={w.content}>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                my posts
                <div>
                    new posts
                </div>
            </div>
            <div>
                <div className={w.item}>Post1</div>
                <div className={w.item}>Post2</div>
            </div>
        </div>
    )
}