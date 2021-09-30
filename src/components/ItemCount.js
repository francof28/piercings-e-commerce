import React, { useState } from "react";
import './ItemCount.css';

const ItemCount = (props) => {
    const [items, setItems] = useState(props.initial)

    const addItem = () => {
        if(items < props.stock) {
            setItems(items + 1)
            props.onAdd(items)
        }
    };

    const restItem = () => {
        if(items > 0) {
            setItems(items - 1)
            props.onAdd(items)
        }
    };
    
    return (
        <div className="container">
            <div className="counter">
                <button onClick={restItem}>-</button>
                <p>{items}</p>
                <button onClick={addItem}>+</button>
            </div>
            <button className="addToCart">Agregar al carrito</button>
            <p className="stock">Stock disponible: {props.stock}</p>
        </div>
    )
}

export default ItemCount;