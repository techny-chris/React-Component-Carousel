import React from "react";
import "./Card.css";

function CardItem() {
    return (
        <div className="card">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ width: 150 + "px" }}/>
                <div className="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
        </div>
    );
}

export { CardItem };