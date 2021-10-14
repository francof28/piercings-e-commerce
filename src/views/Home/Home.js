import React from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Home = () => {
    return( 
        <div>
            <ItemListContainer mensaje={`Mensaje enviado desde las props!`}/>
        </div>
    )
}

export default Home;