// import React, { useState } from "react";

// import '../styles/propertyCard.css';


// const PropertyCard = ({ coverImageUrl, title, location, hostName, hostSurname, hostPictureUrl }) => {
//     return (
//       <div className="property-container">
//         {/* Cover Image */}
//         <img src={coverImageUrl} alt="Property Cover" className="cover-image" />
  
//         {/* Flex Container */}
//         <div className="details-container">
//           {/* Left Side: Title and Location */}
//           <div className="left-side">
//             <h1 className="property-title">{title}</h1>
//             <p className="property-location">{location}</p>
//           </div>
  
//           {/* Right Side: Host Info */}
//           <div className="right-side">
//             <div className="host-info">
//               <p className="host-name">{hostName}</p>
//               <p className="host-name">{hostSurname}</p>
//               <img src={hostPictureUrl} alt="Host" className="host-picture" />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };


// export default PropertyCard;

import React from 'react';
import '../styles/propertyCard.css';

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
                <div className="host-info">
                    <div className="host-name">{host.name}</div>
                    <img className="host-picture" src={host.picture} alt={`${host.name}`} />
                </div>
            </div>

            <div className="property-rating">
                {ratingStars.map((isFilled, index) => (
                    <span key={index} className={`star ${isFilled ? 'filled' : 'empty'}`}>★</span>
                ))}
            </div>

            <div className="property-description">
                <p>{description}</p>
            </div>

            <div className="property-equipments">
                <h3>Équipements</h3>
                <ul>
                    {equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PropertyCard;
