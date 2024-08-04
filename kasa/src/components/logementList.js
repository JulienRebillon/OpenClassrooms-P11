import React from "react";
import '../styles/logementList.css';
import LogementCard from '../components/logementCard';
import LogementData from '../data/data.json';

const LogementList = () => {
    return (
        <div classname="logementList">
            <div classname="logementContainer">
                {LogementData.map((logement) => (
                    <LogementCard key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
                ))}
            </div>
        </div>
    );
}


export default LogementList;