import w from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div>
                my posts
                <div>
                    <textarea></textarea>
                    <button>Add Post</button>
                </div>
            </div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}