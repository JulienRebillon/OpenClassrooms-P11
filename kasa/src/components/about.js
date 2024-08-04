import React from "react";
import '../styles/about.css';
import Collapse from './collapse';

const About = () => {
    return (
        <div className="collapseContainer" >
            <Collapse title="Fiabilité" content="lorem ipsum" />
            <Collapse title="Respect" content="lorem ipsum2" />
            <Collapse title="Service" content="lorem ipsum3" />
            <Collapse title="Sécurité" content="lorem ipsum4" />
        </div>
    )
};


export default About;