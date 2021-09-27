import React from "react";
import './ItemListContainer.css';

class ItemListContainer extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <h3>{this.props.mensaje}</h3>
        )
    }
}

export default ItemListContainer;