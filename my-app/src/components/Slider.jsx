import React, { useState } from 'react';
import '../css/Slider.css';

function Slider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="slider-container">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="slider-image"
            />
            {images.length > 1 && (
                <>
                    <button className="slider-button prev" onClick={goToPrevious}>
                        &lt;
                    </button>
                    <button className="slider-button next" onClick={goToNext}>
                        &gt;
                    </button>
                </>
            )}
        </div>
    );
}

export default Slider;