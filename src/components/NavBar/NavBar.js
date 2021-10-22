import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

import { Link } from "react-router-dom";

const NavBar = () => {
        return (
            <div className="NavBar">
                <header className="header">Piercings MF</header>
                <CartWidget />
                <ul>
                <Link className='Link' to='/'>
					Home
				</Link>
                <Link className='Link' to='/categories'>
					Categorias
				</Link>
				<Link className='Link' to='/about'>
					About
				</Link>
				<Link className='Link' to='/contact'>
					Contact
				</Link>
                </ul>
            </div>
        )
}

export default NavBar;