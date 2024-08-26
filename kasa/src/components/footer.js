import React from "react";
import '../styles/footer.scss';
import kasaFooter from '../images/Kasa_logo_black.png';

const Footer = () => {
    return (
        <footer>
            <div className="footerLogo">
                <img src= {kasaFooter} alt="Logo Kasa"/>
            </div>
            <div>
                <p>&copy; 2020 Kasa. All <span>rights reserved</span>
                </p>
            </div>
        </footer>
    );
}


export default Footer;