import React from "react";
import '../styles/logementList.scss';
import LogementCard from '../components/logementCard';
import LogementData from '../data/data.json';

const LogementList = () => {

    // Slice the LogementData array to only take the first 6 items
    const limitedLogementData = LogementData.slice(0, 6);

    return (
        <div className="logementList">
            <div className="logementContainer">
                {limitedLogementData.map((logement) => (
                    <LogementCard key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
                ))}
            </div>
        </div>
    );
}


export default LogementList;