import React from 'react';
import '../styles/header.css';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation


const Header = () => {
    const location = useLocation(); //get the current location

    return (
        <header className="header">

            <div className='logo'>
                <img src="./../images/Kasa_logo_big.png" alt="Logo Kasa"/>
            </div>

            <nav className='navBar'>
                <ul>
                    <li>
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>A propos</Link>
                    </li>
                </ul>
            </nav>

        </header>
    );
}


export default Header;