import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Travel Background ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover Incredible India
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Explore the rich cultural heritage and breathtaking landscapes of India
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105">
              Explore Destinations
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300">
              Book Tour
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;