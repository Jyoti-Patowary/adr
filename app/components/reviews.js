'use client';
import React, { useState } from 'react';

const reviews = [
  {
    title: "Sara J.",
    review: 'I purchased 2 inks from this company and both arrived the following day before 10am! The price was over £5 cheaper than I could find anywhere else online. Very happy with my purchase thank you.',
    author: '',
  },
  {
    title: "Robert James",
    review: 'After receiving my cartridge, I realised that I had ordered the wrong item. I called Everything Ink and the lady who I got through to was very helpful and resolved my issue straight away. I will definitely be ordering from these again.',
    author: '',
  },
  {
    title: "Derek Alan",
    review: '5 star seller. Quickly delivery and great product',
    author: '',
  },
  {
    title: "Michael Scott",
    review: 'No, Rose, they are not breathing. And they have no arms or legs ... Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?',
    author: '',
  },
  {
    title: "Pam Beesly",
    review: 'I feel God in this Chili’s tonight.',
    author: '',
  },
];

const ReviewCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % Math.ceil(reviews.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + Math.ceil(reviews.length / 3)) % Math.ceil(reviews.length / 3));
  };

  return (
    <div className="container py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-center mb-6 font-poppins">Our Happy Customers</h2>
      </div>
      <div className="relative flex items-center">
        <div className="flex overflow-hidden px-2" style={{width: "96%"}}>
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
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
