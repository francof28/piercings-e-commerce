import React from "react";
import './ItemListContainer.css';

class ItemListContainer extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <h1>{this.props.mensaje}</h1>
        )
    }
}

export default ItemListContainer;