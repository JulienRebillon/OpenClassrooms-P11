import React from "react";
import '../styles/logementCard.scss';
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const LogementCard = ({ id, title, cover }) => {
    return (
        <div className="logementCard">
            <Link to={`/logement/${id}`}>
                <div className="card-cover">
                    <img src={cover} alt={title} />
                    <div className="cardContent">
                        <h2>{title} </h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default LogementCard;