import React, { useState, useEffect } from 'react';
import '../css/Slider.css';

function Slider({ images, autoSlideInterval = 3000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let intervalId;
        if (images && images.length > 1 && autoSlideInterval > 0) {
            intervalId = setInterval(() => {
                goToNext();
            }, autoSlideInterval);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [images, autoSlideInterval]);

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
                style={{height: "50vh"}}
            />
            {images && images.length > 1 && (
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