import React, { useEffect } from "react";

import "./Banner.scss";
import BannerImg1 from "../../../assets/products/earbuds-prod-1.webp";
import BannerImg2 from "../../../assets/products/headphone-prod-1.webp";
import BannerImg3 from "../../../assets/products/phone-1.png";
import { Carousel } from 'bootstrap'; // Import Bootstrap C

const Banner = () => {
    useEffect(() => {
        // Initialize the carousel on component mount
        const carousel = document.getElementById('carouselExampleIndicators');
        const bootstrapCarousel = new Carousel(carousel, {
            interval: 4000, // Autoplay interval in milliseconds (2000ms = 2 seconds)
            pause: 'hover', // Pause the carousel on mouse hover
            wrap: false // Allow wrapping from last item to first and vice versa
        });

        return () => {
            // Cleanup - destroy the carousel when the component unmounts
            bootstrapCarousel.dispose();
        };
    }, []); // 
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Phonex</h1>
                    <p>
                        Convallis interdum purus adipiscing dis parturient
                        posuere ac a quam a eleifend montes parturient posuere
                        curae tempor
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide banner-img" data-bs-ride="carousel">
                    <div className="carousel-inner banner-img">
                        <div className="carousel-item active">
                            <img src={BannerImg1} className="d-block w-100" alt="Slide 1" />
                        </div>
                        <div className="carousel-item">
                            <img src={BannerImg2} className="d-block w-100" alt="Slide 2" />
                        </div>
                        <div className="carousel-item">
                            <img src={BannerImg3} className="d-block w-100" alt="Slide 3" />
                        </div>
                    </div>
                </div>
                {/* <img className="banner-img" src={BannerImg} /> */}
            </div>
        </div>
    );
};

export default Banner;
