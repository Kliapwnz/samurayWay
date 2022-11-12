import React from 'react';
import './App.css';
import {Header} from "./components/Header";

const App = () => {
    return (
        <div className="app-wrapper">
           <Header/>
            <nav className="nav">
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>

            </nav>
            <div className="content">
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
                    <div>Post1</div>
                    <div>Post2</div>
                </div>
            </div>
        </div>

    );
}

export default App;
