import React, { useState } from "react";

import "../pages-css/carousel.css";
import arrowLeft from "../assets/images/left-arrow.svg";
import arrowRight from "../assets/images/right-arrow.svg";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!pictures || pictures.length === 0) return null;

  const hasMultiplePictures = pictures.length > 1;

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <img
        src={pictures[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="carousel-image"
      />
      {hasMultiplePictures && (
        <>
          <img
            src={arrowLeft}
            alt="Précédent"
            className="carousel-arrow left"
            onClick={prevImage}
          />

          <img
            src={arrowRight}
            alt="Suivant"
            className="carousel-arrow right"
            onClick={nextImage}
          />
        </>
      )}
      {hasMultiplePictures && (
        <div className="carousel-counter">
          {currentIndex + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
};

export default Carousel;