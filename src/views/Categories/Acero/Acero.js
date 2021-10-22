import React from "react";
import piercings from "../../../components/piercings.json";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Item from '../../../components/Item/Item'

const Acero = () => {
    const [piercingsList, setPiercingsList] = useState([]);
    
    useEffect(() => {
        const task = new Promise((resolve, reject) => {
            setTimeout(function () {resolve(piercings)}, 2000)
        })
        
        task.then((response) => {
            setPiercingsList(response);
        })
    }, [])

    const newPiercingList = piercingsList.filter(n => n.id < 3)

    return( 
        <div>
            {newPiercingList.map(item =>
            <Link to={`/detail/${item.id}`}> 
                <Item id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.pictureUrl}/>
            </Link>)
        }
        </div>
    )
}

export default Acero;