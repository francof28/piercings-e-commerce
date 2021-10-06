import React from "react";
import './ItemList.css';
import Item from "./Item";

const ItemList = (props) => {
    const task = new Promise((resolve, reject) => {
        resolve(true);
    });
    
    return (
    <div className="ItemList">
        {props.items.map(item => 
            <Item id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl}/>)}
    </div>
    )
}

export default ItemList;