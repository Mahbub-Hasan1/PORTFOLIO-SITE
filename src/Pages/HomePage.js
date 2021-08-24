import React from 'react';
import About from '../Components/Home/About';
import Footer from '../Components/Home/Footer';
import Header from '../Components/Home/Header';
import Process from '../Components/Home/Process';
import Services from '../Components/Home/Services';
import Contact from '../Components/ShareComponents/Contact';
import Portfolio from '../Components/ShareComponents/Portfolio';

const HomePage = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Services/>
            <Process/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default HomePage;
