import React from "react";
import './Item.css';

const Item = (props) => {
    return (
        <div className="Item">
            <h3>{`${props.id}. ${props.title}`}</h3>
            <p>{`$${props.price}`}</p>
            <p>{props.description}</p>
            <img src={props.pictureUrl} alt="Item" />
        </div>
    )
}

export default Item;