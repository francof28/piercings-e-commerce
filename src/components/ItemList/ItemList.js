import React from "react";
import './ItemList.css';
import Item from '../Item/Item';

import { Link } from "react-router-dom";

const ItemList = ({items}) => {
    return (
    <div className="ItemList">
        {items.map(item =>
            <Link to={`/detail/${item.id}`}> 
                <Item id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl}/>
            </Link>)
        }
    </div>
    )
}

export default ItemList;