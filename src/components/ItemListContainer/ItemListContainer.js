import React, { useEffect, useState } from "react";
import piercings from "../piercings.json";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';

// const PIERCINGS = [
//    {id: 1, title: "anillo garra", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", price: 4000, pictureUrl: "https://www.piercingargentinastore.com/productos/1500055447/photos/prin_1500055447.jpg"},
//    {id: 2, title: "colgante ombligo", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", price: 2100, pictureUrl: "https://www.piercingargentinastore.com/productos/1502728915/photos/prin_1502728915.jpg"},
//    {id: 3, title: "nariz oro", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", price: 9899, pictureUrl: "https://www.piercingargentinastore.com/productos/1497384563/photos/prin_1497384563.jpg"}
// ]

const ItemListContainer = (props) => {
    const [piercingsList, setPiercingsList] = useState([]);
    
    useEffect(() => {
        const task = new Promise((resolve, reject) => {
            setTimeout(function () {resolve(piercings)}, 2000)
        })
        
        task.then((response) => {
            setPiercingsList(response);
        })
    }, [])

    return (
        <div>
            <h1>{props.mensaje}</h1>
            <ItemList items={piercingsList}/>
        </div>
        )
}

export default ItemListContainer;