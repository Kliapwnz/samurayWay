import w from "./MyPosts.module.css";
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
                <div>
                    <textarea></textarea>
                    <button>Add Post</button>
                </div>
                <div className={w.item}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"/>
                    Post1</div>
                <div className={w.item}>Post2</div>
                <div className={w.item}>Post3</div>
                <div className={w.item}>Post4</div>
                <div className={w.item}>Post5</div>
            </div>
        </div>
    )
}