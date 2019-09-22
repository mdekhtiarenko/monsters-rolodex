import React from "react";
import "./cart.styles.css";

export const Cart = (props) => {
    return (
        <div className="cart">
            <div className="image-container">
                <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=200x200`} />
            </div>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}