import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import InfoSection from './components/InfoSection'; // Import the InfoSection component
import Contact from "./components/Contact"
import './App.css';
import Footer from './components/Footer';

function App() {
    const sliderImages = [
        '/images/brand1.png',
        '/images/brand2.png',
    ];

    return (
        <div>
            <Header />
            <Slider images={sliderImages} />
            <Navbar />
            <InfoSection /> {/* Use the InfoSection component */}
            {/* Your other content */}
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}

export default App;