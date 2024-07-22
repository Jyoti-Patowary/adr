'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const AboutSection = () => {
  const [currentWord, setCurrentWord] = useState('Bike');

  useEffect(() => {
    const words = ['Bike', 'Car', 'Scooty'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
      setCurrentWord(words[currentIndex]);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="container flex flex-col md:flex-row items-center bg-white p-8 py-20">
      <div className="md:w-1/2 relative">
        <Image
          src="/cars/duster.jpg" 
          alt="Business Meeting"
          layout="responsive"
          width={500}
          height={400}
          className="rounded-lg"
        />
        <div className="absolute bottom-6 left-6 space-y-4">
          <div className="flex items-end bg-black text-white py-2 px-4 rounded-full">
            <span className="mr-2">✔️</span>
            <span>FOCUS ON DRIVING RESULTS</span>
          </div>
          <div className="flex items-center bg-black text-white py-2 px-4 rounded-full translate-x-12">
            <span className="mr-2">✔️</span>
            <span>HELP YOUR BUSINESS GROW</span>
          </div>
          <div className="flex items-center bg-black text-white py-2 px-4 rounded-full translate-x-24">
            <span className="mr-2">✔️</span>
            <span>MORE THAN A PLACE TO WORK</span>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
        <h2 className="text-3xl font-bold mb-6 font-poppins">About Us</h2>
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Adventure & Freedom with <span className="text-yellow-300">ADR {currentWord} Rentals</span>
        </h1>
        <p className="text-gray-700 mb-6">
          At ADR Rentals, we believe that every journey should be an adventure, and we are here to make that happen. Whether you’re cruising through city streets or exploring rugged mountain trails, our wide range of bikes ensures there’s something for every type of rider.
        </p>
        <button className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300">
          Learn More →
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
