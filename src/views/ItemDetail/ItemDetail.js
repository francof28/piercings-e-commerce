import React, { useEffect, useState } from "react";
import piercings from "../../components/piercings.json"

const ItemDetail = ( item ) => {
    const [piercingItem, setPiercingItem] = useState({});

    // console.log("MATCH", item)

    useEffect(() => {
        const task = new Promise((resolve, reject) => {
            setTimeout(function () {resolve(piercings[item.match.params.id - 1])}, 2000)
        })
        
        task.then((response) => {
            setPiercingItem(response);
        })
    }, [])

    // console.log("ITEM", piercingItem)

    return (
        <div className="Item">
            <h3>{`${piercingItem.id}. ${piercingItem.title}`}</h3>
            <p>{`$${piercingItem.price}`}</p>
            <p>{piercingItem.description}</p>
            <img src={piercingItem.pictureUrl} alt="Item" />
        </div>
    )
}

export default ItemDetail;