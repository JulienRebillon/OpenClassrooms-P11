import React from 'react';
import '../styles/propertyCard.scss';
import Collapse from './collapse';
import StarFull from '../images/Star-full.png';
import StarEmpty from '../images/Star-empty.png';

function PropertyCard({ title, location, host, rating, description, equipments, tags }) {
    // Convert rating to an array to render stars
    const ratingStars = Array(5).fill(false).map((_, i) => i < rating);

    return (
        <div className="property-card">
            <div className="property-header">
                <div className="property-info">
                    <h1 className="property-title">{title}</h1>
                    <p className="property-location">{location}</p>
                    <div className="property-tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="property-tag">{tag}</span>
                        ))}
                    </div>
                </div>

                <div className ="host-container">
                    <div className="host-info">
                        <div className="host-name">{host.name}</div>
                        <img className="host-picture" src={host.picture} alt={`${host.name}`} />
                    </div>
                    
                    <div className="property-rating">
                        {ratingStars.map((isFilled, index) => (
                            <img 
                                key={index} 
                                src={isFilled ? StarFull : StarEmpty} 
                                alt={isFilled ? "Full Star" : "Empty Star"} 
                                className="star"
                            />
                        ))}
                    </div>
                </div>

            </div>

            
            <div className='property-container'>
                <div className="property-description">
                    {/* Pass description as a string to the content prop */}
                    <Collapse title="Description" content={description} />
                </div>

                <div className="property-equipments">
                    {/* Pass equipments array directly to the content prop */}
                    <Collapse title="Équipements" content={equipments} />
                </div>
            </div>
          

            
        </div>
    );
}

export default PropertyCard;
