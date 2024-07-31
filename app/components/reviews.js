'use client';
import React, { useState } from 'react';

const reviews = [
  // {
  //   title: "Sara J.",
  //   review: 'I purchased 2 inks from this company and both arrived the following day before 10am! The price was over £5 cheaper than I could find anywhere else online. Very happy with my purchase thank you.',
  //   author: '',
  // },
  // {
  //   title: "Robert James",
  //   review: 'After receiving my cartridge, I realised that I had ordered the wrong item. I called Everything Ink and the lady who I got through to was very helpful and resolved my issue straight away. I will definitely be ordering from these again.',
  //   author: '',
  // },
  {
    title: "Luhit Thengal",
    review: "Booked a bike with ADR Rentals. The service was satisfying. They live upto their promise. The bike condition was well maintained.",
    author: '',
  },
  {
    title: "Jayashree Sarma",
    review: "Budget friendly four wheeler and two wheeler rental service, Highly recommended.",
    author: '',
  },
  {
    title: "Jaydev Talukdar",
    review: "Well maintained scooty , good service and hassle free experience. The booking process very quick. I didn't have to wait much.",
    author: '',
  },
];

const ReviewCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cardWidth = 384; // Adjust this width according to your card's width

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="container py-12">
      <div className="text-center mb-8">
        <h2 className="text-6xl font-comforter font-bold text-center mb-6">Our Happy Customers</h2>
      </div>
      <div className="flex overflow-hidden px-2" style={{width: "96%"}}>
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * cardWidth}px)` }}>
          {reviews.map((review, index) => (
            <div key={index} className="flex justify-center py-6 px-4">
              <div className="bg-white p-6 rounded-xl shadow-lg w-96 max-h-96 ">
                <div className="flex mb-2">
                  {[...Array(5)].map((star, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.168c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347a1 1 0 00-1.175 0l-3.357 2.44c-.785.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L1.493 9.395c-.783-.57-.38-1.81.588-1.81h4.168a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-2">{review.title}</h3>
                <p className="text-gray-600 mb-2">{review.review}</p>
                <p className="text-gray-800 font-semibold">{review.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ReviewCarousel;
