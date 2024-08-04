import React from "react";
import '../styles/404.css';
import { Link } from 'react-router-dom';

const Error= () => {
    return (
        <div className="error-page">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="error-linkBack">Retourner à la page d'accueil</Link>
        </div>
    );
}


export default Error;