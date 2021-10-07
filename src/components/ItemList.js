import React from "react";
import './ItemList.css';
import Item from "./Item";

const ItemList = ({items}) => {
    return (
    <div className="ItemList">
        {items.map(item => 
            <Item id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl}/>)}
    </div>
    )
}

export default ItemList;