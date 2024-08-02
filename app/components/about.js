'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    <div className="container flex flex-col md:flex-row items-center bg-white p-4 md:p-8 py-12 md:py-20">
      <div className="md:w-1/2 relative mb-6 md:mb-0">
        <Image
          src="/duster.jpg" 
          alt="Business Meeting"
          layout="responsive"
          width={500}
          height={900}
          className="rounded-lg"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="absolute bottom-4 left-4 space-y-2 md:space-y-4">
          <div className="flex items-center bg-black text-white py-1 px-5 md:py-2 md:px-4 rounded-full">
            <span className="mr-1 md:mr-2">✔️</span>
            <span className="text-xs md:text-lg">Experience Top Performance and Comfort</span>
          </div>
          <div className="flex items-center bg-black text-white py-1 px-2 md:py-2 md:px-4 rounded-full md:translate-x-10 ">
            <span className="mr-1 md:mr-2">✔️</span>
            <span className="text-xs md:text-lg">Explore More with Every Journey</span>
          </div>
          <div className="flex items-center bg-black text-white py-1 px-2 md:py-2 md:px-4 rounded-full md:translate-x-20">
            <span className="mr-1 md:mr-2">✔️</span>
            <span className="text-xs md:text-lg">Not Just a Rental—An Adventure</span>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 md:pl-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 font-poppins">About Us</h2>
        <h1 className="text-2xl md:text-5xl font-bold mb-4 leading-tight">
          Adventure & Freedom with <span className="text-yellow-300">ADR {currentWord} Rentals</span>
        </h1>
        <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
          At ADR Rentals, we’re all about turning your travels into adventures. Whether you’re navigating city streets or tackling rugged mountain trails, we’ve got a diverse fleet of {currentWord} to suit every rider’s needs. From smooth urban rides to challenging off-road experiences, find the perfect bike for your next journey with us.
        </p>
        <Link href="/about">
          <button className="bg-black text-white py-2 px-4 md:py-3 md:px-6 rounded-full hover:bg-gray-800 transition duration-300">
            Learn More →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
