import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import w from "./components/Profile/Profile.module.css";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={w.content}>
                <Dialogs/>
                {/*<Profile/>*/}
            </div>


        </div>

    );
}

export default App;
