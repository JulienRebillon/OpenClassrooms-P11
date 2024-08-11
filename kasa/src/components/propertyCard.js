import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import '../styles/propertyCard.css';


const PropertyCard = ({ coverImageUrl, title, location, hostName, hostSurname, hostPictureUrl }) => {
    return (
      <div className="property-container">
        {/* Cover Image */}
        <img src={coverImageUrl} alt="Property Cover" className="cover-image" />
  
        {/* Flex Container */}
        <div className="details-container">
          {/* Left Side: Title and Location */}
          <div className="left-side">
            <h1 className="property-title">{title}</h1>
            <p className="property-location">{location}</p>
          </div>
  
          {/* Right Side: Host Info */}
          <div className="right-side">
            <div className="host-info">
              <p className="host-name">{hostName}</p>
              <p className="host-name">{hostSurname}</p>
              <img src={hostPictureUrl} alt="Host" className="host-picture" />
            </div>
          </div>
        </div>
      </div>
    );
  };


export default PropertyCard;