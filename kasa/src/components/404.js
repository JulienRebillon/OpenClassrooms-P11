import React from "react";
import '../styles/404.scss';
import { Link } from 'react-router-dom';

const Error= () => {
    return (
        <div className="error-page">
            <h1>404</h1>
            <p><span>Oups! La page que </span><span>vous demandez n'existe pas.</span></p>
            <Link to="/" className="error-linkBack">Retourner à la page d'accueil</Link>
        </div>
    );
}


export default Error;