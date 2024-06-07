// Carousel.js
import React, { useState, useEffect } from 'react';
import './Carousel.css';

import image1 from '../images/molecule1.jpg';
import image2 from '../images/molecule2.jpg';
import image3 from '../images/molecule3.jpg';

const Carousel = () => {
  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        setIsTransitioning(false);
      }, 2000); // Adjust the delay (in milliseconds) for the transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPreviousImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setIsTransitioning(false);
    }, 500); // Adjust the delay (in milliseconds) for the transition duration
  };

  const goToNextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setIsTransitioning(false);
    }, 500); // Adjust the delay (in milliseconds) for the transition duration
  };

  return (
    <div className="carousel">
      <img src={images[currentImageIndex]} alt={`Molecule ${currentImageIndex + 1}`} className={`carousel-image ${isTransitioning ? 'transitioning' : ''}`} />
      <button className="prev-button" onClick={goToPreviousImage}> &#10094; </button>
      <button className="next-button" onClick={goToNextImage}> &#10095; </button>
    </div>
  );
};

export default Carousel;