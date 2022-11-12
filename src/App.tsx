import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Nav} from "./components/Nav";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
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
