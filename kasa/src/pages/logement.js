import React, { useState} from "react";
import { useParams } from "react-router-dom";
import Header from '../components/header';
import Footer from '../components/footer';
import Slider from '../components/carrousel';
import PropertyCard from '../components/propertyCard';
import records from '../data/data.json';



const LogementDetails = () => {

    const { id } = useParams();  // Get the id from the URL
    const record = records.find(element => element.id === id);  // Find the record with the matching id

    if (!record) {
        return <div>Logement not found</div>;  // Handle case where the record is not found
    }

    



    return (
        <>
            <Header />
            
            {/* Pass the pictures array to the Slider component */}
            <Slider pictures={record.pictures} />
            
            {/* Pass the record data to PropertyCard component */}
            <PropertyCard 
                title={record.title}
                location={record.location}
                host={record.host}
                rating={record.rating}
                description={record.description}
                equipments={record.equipments}
                tags={record.tags}
            />

            <Footer />               
        </>
    );
};

export default LogementDetails;