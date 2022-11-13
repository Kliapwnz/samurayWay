import w from "../Profile.module.css";
import React from "react";

export const MyPosts = () => {
    return (
        <div>
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