import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import InfoSection from './components/InfoSection'; // Import the InfoSection component
import Contact from "./components/Contact"
import './App.css';
import Footer from './components/Footer';
import NewsSection from './components/NewsSection';
import LanguageBar from './components/LanguageBar';


function App() {
    const sliderImages = [
        '/images/brand1.png',
        '/images/brand2.png',
    ];

    return (
        <div>
            <LanguageBar></LanguageBar>
            <Header />
            <Slider images={sliderImages} />
            <div style={{display:"flex"}}>
            <Navbar />
            <NewsSection></NewsSection>
            </div>
            <InfoSection /> {/* Use the InfoSection component */}
            {/* Your other content */}
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}

export default App;