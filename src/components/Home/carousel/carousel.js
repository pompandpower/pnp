import React, { useState, useEffect } from 'react';
import './carousel.css'; // Assuming you have a CSS file for styling
import homeLogo from "../../../Assets/home/s1.png";
import img1 from "../../../Assets/home/s2.png";
import img2 from "../../../Assets/home/s3.png";
import img3 from "../../../Assets/home/s4.png";
import img4 from "../../../Assets/home/s5.png";
import img5 from "../../../Assets/home/s6.png";

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
            <h1 style={{ color: "white" }}>What <span style={{ color: '#de82ebe8' }}> We Do </span></h1>
            <br></br>
            <br></br>
            <div className="carousel-inner">
                {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
                    <div className={index === 0 ? "" : "newcssslider"}>
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
