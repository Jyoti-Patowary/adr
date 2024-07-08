'use client';

import React, { useState } from 'react';

const slides = [
  {
    type: 'video',
    title: 'Your Adventure Starts Here',
    subtitle: "With ADR",
    description: 'Rent a vehicle of your choice and explore the world with ease.',
    mediaUrl: '/hero1.mp4', 
    buttonText: 'Ride Now',
    buttonLink: '#',
  },
  {
    type: 'image',
    title: 'Unleash Your Adventure',
    description: 'Ride the best bikes and cars available.',
    mediaUrl: 'https://via.placeholder.com/1920x1080',
    buttonText: 'Book Now',
    buttonLink: '#',
  },
  {
    type: 'image',
    title: 'Discover New Horizons',
    description: 'Find the perfect vehicle for your journey.',
    mediaUrl: 'https://via.placeholder.com/1920x1080',
    buttonText: 'Explore',
    buttonLink: '#',
  },
  {
    type: 'image',
    title: 'Comfort & Style',
    description: 'Travel with comfort and style with our premium vehicles.',
    mediaUrl: 'https://via.placeholder.com/1920x1080',
    buttonText: 'See More',
    buttonLink: '#',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            {slide.type === 'image' ? (
              <img src={slide.mediaUrl} alt={slide.title} className="w-full h-full object-cover" />
            ) : (
              <video autoPlay muted loop className="w-full h-full object-cover">
                <source src={slide.mediaUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-6">
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
              <h1 className={`text-5xl font-bold mb-4 font-comforter`}>{slide.subtitle}</h1>
              <p className="text-xl mb-8">{slide.description}</p>
              <a href={slide.buttonLink} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2"
        onClick={nextSlide}
      >
        &gt;
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-2 ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
