'use client';
import React from 'react';
import Slider from 'react-slick';

// Review data
const reviews = [
  {
    title: "Jitartha Khataniar",
    review: 'I rented a TVS NTorq from ADR Rentals in Ghy from July 9-10, 2024. The process was smooth, the scooter was in good condition, and the service was excellent. Highly recommended.',
    rating: 5,
  },
  {
    title: "Ujjal Kalita",
    review: 'It is a great rental to rent a car. The owner is very friendly and polite. The Cars are very new and are in good condition. The professionalism is there. Looking forward to my future drives with them.',
    rating: 5,
  },
  {
    title: "Luhit Thengal",
    review: "Booked a bike with ADR Rentals. The service was satisfying. They live up to their promise. The bike condition was well maintained.",
    rating: 4,
  },
  {
    title: "Jayashree Sarma",
    review: "Budget-friendly four-wheeler and two-wheeler rental service, Highly recommended.",
    rating: 5,
  },
  {
    title: "Jaydev Talukdar",
    review: "Well-maintained scooty, good service, and hassle-free experience. The booking process was very quick. I didn't have to wait much.",
    rating: 4,
  },
  {
    title: "Mintu Mazumdar",
    review: 'Good service',
    rating: 5,
  },
];

const ReviewCarousel = () => {
  // Slick settings
  const settings = {
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-poppins font-bold mb-6">Our Happy Customers</h2>
      </div>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="px-2 py-5 ">
            <div className="bg-white p-4 rounded-xl shadow-lg flex flex-col justify-between h-[200px] md:h-[260px]">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? 'text-yellow-300' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.168c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347a1 1 0 00-1.175 0l-3.357 2.44c-.785.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L1.493 9.395c-.783-.57-.38-1.81.588-1.81h4.168a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-sm md:text-lg font-semibold mb-2">{review.title}</h3>
              <p className="text-sm md:text-base text-gray-600 mb-2 flex-1">{review.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCarousel;
