import React from "react";
import '../styles/logementCard.css';
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// const LogementCard = ({id,title, cover}) => {
//     const navigate = useNavigate();

//     const handleClick = () => {
//         navigate(`/data/${id}`);
//     };

//     return (
//         <div className="logementCard" data-id={id} onClick={handleClick}>
//             <div className="card-cover">
//                 <img src={cover} alt={title} />
//                 <div className="cardContent">
//                     {title}
//                 </div>
//             </div>            
//         </div>
//     );
// }

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