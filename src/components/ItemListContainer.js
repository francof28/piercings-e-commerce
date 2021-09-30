import React from "react";
import ItemCount from "./ItemCount";
import './ItemListContainer.css';

const ItemListContainer = (props) => {
    const onAdd = (count) => {
        alert(count);
    }
    
    return (
        <div>
            <h1>{props.mensaje}</h1>
            <ItemCount stock="5" initial={1} onAdd={onAdd}/>
        </div>
        )
}

export default ItemListContainer;