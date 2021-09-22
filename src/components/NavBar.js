import React from "react";
import './NavBar.css';

class NavBar extends React.Component {
    render () {
        return (
            <div className="NavBar">
                <header className="header">Piercings MF</header>
                <ul>
                    <li>Ombligo</li>
                    <li>Expansores</li>
                    <li>Septum</li>
                    <li>Lengua</li>
                    <li>Argollitas</li>
                    <li>Nariz</li>
                    <li>Cartilago</li>
                    <li>Boca</li>
                    <li>Mas categorias</li>
                </ul>
            </div>
        )
    }
}

export default NavBar;