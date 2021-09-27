import React from "react";
import CartWidget from "./CartWidget";
import './NavBar.css';

class NavBar extends React.Component {
    render () {
        return (
            <div className="NavBar">
                <header className="header">Piercings MF</header>
                <ul>
                    <CartWidget />
                    <li><a href="#">Ombligo</a></li>
                    <li><a href="#">Expansores</a></li>
                    <li><a href="#">Septum</a></li>
                    <li><a href="#">Lengua</a></li>
                    <li><a href="#">Nariz</a></li>
                    <li><a href="#">Cartilago</a></li>
                    <li><a href="#">Boca</a></li>
                    <li><a href="#">Mas categorias</a></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;