import w from "./Post.module.css";
import React from "react";

type postMessageType= {
    message: string
}

export const Post = (props:postMessageType) => {
    return (
        <div className={w.item}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"/>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}