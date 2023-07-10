import React, { useState, useEffect } from 'react';
import './carousel.css'; // Assuming you have a CSS file for styling
import homeLogo from "../../../Assets/s1.png";
import img1 from "../../../Assets/s2.png";
import img2 from "../../../Assets/s3.png";
import img3 from "../../../Assets/s4.png";
import img4 from "../../../Assets/s5.png";
import img5 from "../../../Assets/s6.png";

const Carousel = () => {
    const images = [
        [homeLogo, "Logo & Branding"],
        [img1, "Print Design Services"],
        [img2, "Graphic Design Services"],
        [img3, "UI/UX & Web Development"],
        [img4, "Art & Illustration"],
        [img5, "Content Creation & Strategy"],
        // Add more image URLs as needed
    ];


    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 3 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="carousel">
            <div className="carousel-inner">
                {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
                    <div>
                        <img
                            className={index === 0 ? "carousel-image" : "carousel-image cssliderlt"}
                            src={image[0]}
                            alt="By Pomp & Power Designs"
                            />
                        <div className="carousel-title">{image[1]}</div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Carousel;
