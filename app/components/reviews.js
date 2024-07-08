'use client'
import React, { useState } from 'react';

const reviews = [
  {
    name: 'John Doe',
    review: 'Great service! The vehicle was in excellent condition and the booking process was smooth.',
    imageUrl: 'https://via.placeholder.com/100',
  },
  {
    name: 'Jane Smith',
    review: 'I had an amazing experience! The customer support was very helpful and the vehicle met all my expectations.',
    imageUrl: 'https://via.placeholder.com/100',
  },
  {
    name: 'Michael Johnson',
    review: 'Highly recommended! The prices are reasonable and the vehicle selection is top-notch.',
    imageUrl: 'https://via.placeholder.com/100',
  },
  {
    name: 'Emily Davis',
    review: 'Fantastic service! I will definitely use their services again for my next trip.',
    imageUrl: 'https://via.placeholder.com/100',
  },
];

const ReviewCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden py-12">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>
      <div className="relative h-64">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="flex flex-col items-center justify-center h-full bg-white p-6 rounded-xl shadow-md">
              <img src={review.imageUrl} alt={review.name} className="w-24 h-24 rounded-full mb-4" />
              <p className="text-lg italic mb-4 text-center">"{review.review}"</p>
              <h3 className="text-xl font-semibold">{review.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
        onClick={nextSlide}
      >
        &gt;
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-2 ${index === currentSlide ? 'bg-gray-700' : 'bg-gray-400'}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
