import React from "react";
import './styles/logementCard.css';
import { useNavigate } from "react-router-dom";

const LogementCard = ({id,title, cover}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/logements/${id}');
    };

    return (
        <div className="logementCard" data-id="{id}" onClick={handleClick}>
            <div className="card-cover">
                <img src={cover} alt={title} />
                <div className="cardContent">
                    {title}
                </div>
            </div>            
        </div>
    );
}


export default LogementCard;