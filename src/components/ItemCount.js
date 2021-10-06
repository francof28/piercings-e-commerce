import React, { useState } from "react";
import './ItemCount.css';

const ItemCount = (props) => {
    const [items, setItems] = useState(props.initial)

    const addItem = () => {
        if(items < props.stock) {
            setItems(items + 1)
        }
    };

    const restItem = () => {
        if(items > 0) {
            setItems(items - 1)
        }
    };
    
    const randomAlert = () => {
        if(items !== 0) {
            props.onAdd(items)
        }
    }

    return (
        <div className="container">
            <div className="counter">
                <button onClick={restItem}>-</button>
                <p>{items}</p>
                <button onClick={addItem}>+</button>
            </div>
            <button className="addToCart" onClick={randomAlert}>Agregar al carrito</button>
            <p className="stock">Stock disponible: {props.stock}</p>
        </div>
    )
}

export default ItemCount;