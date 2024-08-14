'use client'

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import HeroSection from '../components/hero';

// Define the slides for the carousel
const carouselSlides = [
  {
    mediaUrl: '/duster.jpg',
    altText: 'Carousel Image 1',
  },
  {
    mediaUrl: '/hero2.jpg',
    altText: 'Carousel Image 2',
  },
];

// Define the cards for the How It Works section
const howItWorksCards = [
  {
    imageUrl: '/handshake.png',
    title: 'Get into contract with ADR',
  },
  {
    imageUrl: '/coins.png',
    title: 'Get paid every month',
  },
];

// Define the FAQ items
const faqItems = [
  {
    question: 'How do I list my vehicle?',
    answer: 'You can list your vehicle by filling out the form on this page.',
  },
  {
    question: 'What are the requirements?',
    answer: 'We require basic details about the vehicle and your contact information.',
  },
  // Add more FAQ items as needed
];

const PartnerWithADR = () => {
  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mt-24">
      {/* Header Carousel */}
      <div className="relative">
        <Slider {...carouselSettings}>
          {carouselSlides.map((slide, index) => (
            <div key={index} className="relative w-full h-96">
              <Image
                src={slide.mediaUrl}
                alt={slide.altText}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
                priority 
              />
            </div>
          ))}
        </Slider>
      </div>
          {/* <HeroSection/> */}
      {/* How It Works Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {howItWorksCards.map((card, index) => (
            <div key={index} className="max-w-xs p-4 bg-white border border-gray-300 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{item.question}</h3>
              <p className="mt-2">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why ADR Rentals Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Why ADR Rentals</h2>
        <p className="text-lg">
          ADR Rentals offers competitive rates, a seamless renting process, and reliable service.
          Partner with us to make your vehicle rental experience smooth and rewarding.
        </p>
      </div>
    </div>
  );
};

export default PartnerWithADR;
