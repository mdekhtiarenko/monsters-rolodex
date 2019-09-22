import React from "react";
import { Cart } from "../card/cart.component";
import "./cart-list.style.css";

export const CartList = (props) => {
    return (
        <div className="cart-list">
            {
                props.monsters.map(monster => <Cart key={monster.id} monster={monster} />)
            }
        </div>
    )
}