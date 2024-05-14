// Carousel.js

import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Import carousel styles
import image1 from '../images/molecule1.jpg'; // Sample image
import image2 from '../images/molecule2.jpg'; // Sample image
import image3 from '../images/molecule3.jpg'; // Sample image

const Carousel = () => {
  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Molecule ${index + 1}`}
          className={index === currentImageIndex ? 'carousel-image active' : 'carousel-image'}
        />
      ))}
      <button className="prev-button" onClick={goToPreviousImage}>&#10094;</button>
      <button className="next-button" onClick={goToNextImage}>&#10095;</button>
    </div>
  );
};

export default Carousel;
