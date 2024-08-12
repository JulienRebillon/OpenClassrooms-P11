import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Slider from '../components/carrousel';
import PropertyCard from '../components/propertyCard';

const LogementDetails = () => {
    return (
        <>
            <Header />
            <Slider />
            <PropertyCard />
            <Footer />        
        </>
    );
};

export default LogementDetails;