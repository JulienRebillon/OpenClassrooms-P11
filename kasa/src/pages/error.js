import React from "react";
import Header from '../components/header';
import Error from '../components/404';
import Footer from '../components/footer';

const ErrorPage = () => {
    return (
        <>
            <Header />
            <Error />
            <Footer />
        </>
    );
}

export default ErrorPage;