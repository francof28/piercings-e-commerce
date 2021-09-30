import React from "react";
import CartWidget from "./CartWidget";
import './NavBar.css';

const NavBar = () => {
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

export default NavBar;