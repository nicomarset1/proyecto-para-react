import React from "react";
import './styles.css';

const Header = ({logo, menuitem}) => {
    return(
    <header className="header">
        <a href="/" className="logo">Nicolas Marset Primera Pre-Entrega</a>
            <input type="checkbox" className="side-menu" id="side-menu"/>
            <label className="ham" for='side-menu' >
                <span className="ham-line"></span>
            </label>
            <nav className="nav">
                <ul className="menu">
                    <li><a href="">About</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Categories</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;