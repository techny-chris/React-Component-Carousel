import React from "react";
import logo from './logo.svg';
import './main.css';

function MainContainer(props) {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Component Carousel 
                </p>
                <sub> /  Challenge</sub>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div>
                {props.children}
            </div>
            <br/>
        </div>
       
    );
}

export { MainContainer };