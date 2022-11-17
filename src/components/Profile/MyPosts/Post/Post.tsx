import w from "./Post.module.css";
import React from "react";

export const Post = () => {
    return (
        <div className={w.item}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"/>
            Post1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}