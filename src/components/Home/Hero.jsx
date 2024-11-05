// HeroSection.js
import React, { useState, useEffect } from "react";

const Hero = () => {
  // Array of background images and corresponding images for the right side
  const images = [
    {
      background: "/src/assets/carousel-bg-1.jpg",
      image: "/src/assets/carousel-2.png",
    },
    {
      background: "/src/assets/carousel-bg-2.jpg",
      image: "/src/assets/carousel-1.png",
    },
  ];

  // State to track the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to handle automatic image slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen pt-16 text-white bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentIndex].background})` }}
    >
      <div className="flex items-center justify-between w-full max-w-7xl p-10 relative">
        <div className="text-left z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-accent">
            Qualified Car Repair Service Center
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-start gap-4">
            <button className="px-6 py-3 rounded-full bg-accent text-black font-semibold transition transform hover:scale-105">
              Get Started
            </button>
            <button className="px-6 py-3 rounded-full bg-accent bg-opacity-50 hover:bg-opacity-40 transition font-semibold">
              Learn More
            </button>
          </div>
        </div>
        <div className="hidden md:block z-10">
          <img
            src={images[currentIndex].image}
            alt="Car Repair"
            className="w-1/2 h-auto rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
