'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

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
    title: 'Two Wheels, Endless Possibilities',
    description: 'Where the roads meets the soul',
    mediaUrl: '/hero2.jpg',
    buttonText: 'Rent Now',
    buttonLink: '#',
  },
  // Additional slides can be added here
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-96 md:h-[75vh] lg:h-[80vh] overflow-hidden">
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            {slide.type === 'image' ? (
              <Image 
                src={slide.mediaUrl} 
                alt={slide.title} 
                layout="fill" 
                objectFit="cover" 
                priority={index === 0} // Prioritize the first slide for faster load
              />
            ) : (
              <video autoPlay muted loop className="w-full h-full object-cover">
                <source src={slide.mediaUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-6">
              <h1 className="text-6xl sm:text-6xl md:text-8xl lg:text-9xl font-bold font-comforter pt-11 sm:leading-9 md:leading-loose">{slide.title}</h1>
            </div>
          </div>
        ))}
      </div>
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
