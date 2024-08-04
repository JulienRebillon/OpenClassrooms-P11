import React, { useState } from "react";
import '../styles/collapse.css';

const Collapse = ({ title, content }) => {
    
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const renderContent = () => {
        if (Array.isArray(content)) {
            return (
                <ul>
                    {content.map((item, index) => (
                        <li key={index}> {item} </li>
                    ))}
                </ul>
            );
        } else {
            return <p> {content} </p>
        }
    };

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={toggleCollapse}>
                <div className="collapse-title"> {title} </div>
                <div className={` collapse-icon ${isCollapsed ? 'closed' : 'open' } `}>


                </div>
            </div>
            {!isCollapsed && <div className="collapse-content"> {renderContent} </div> }
        </div>
    )


}


export default Collapse;