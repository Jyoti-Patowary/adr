import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CategoriesAndStore() {
  const categoriesData = [
    {
      title: 'Cars',
      amount: 'Rs. 1,799',
      imageUrl: '/cars/duster2.jpg',
    },
    {
      title: 'Bikes',
      amount: 'Rs. 799',
      imageUrl: '/bikes/jawa42.jpg',
    },
    {
      title: 'Scooty',
      amount: 'Rs. 449',
      imageUrl: '/scooty/ntorq.jpg',
    },
  ];

  return (
    <div className="py-8 md:py-16 container px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold font-poppins text-center pb-8 md:pb-16">
        Our Categories
      </h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="flex flex-col bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 w-full md:w-1/3 h-full">
          <div className="relative w-full h-64 md:h-96">
            <Image
              src={categoriesData[0].imageUrl}
              alt={categoriesData[0].title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-md">
              <p className="text-sm md:text-lg font-semibold">{categoriesData[0].title}</p>
              <p className="text-xs md:text-sm text-gray-600">Starts from {categoriesData[0].amount}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-2/3 gap-4 md:gap-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {categoriesData.slice(1).map((category, index) => (
              <div key={index} className="relative flex flex-col bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 w-full md:w-1/2">
                <div className="relative w-full h-48 md:h-64">
                  <Image
                    src={category.imageUrl}
                    alt={category.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-md">
                  <p className="text-xs md:text-sm font-bold">{category.title}</p>
                  <p className="text-xs md:text-sm text-gray-600">Starts from {category.amount}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-black text-white p-6 md:p-7 rounded-lg mt-4 md:mt-2 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <h2 className="text-base md:text-lg font-semibold">
              We have an accessories store for all vehicles and gears related to vehicles.
            </h2>
            <Link
              href="https://your-store-url.com"
              className="bg-white text-black py-2 px-4 rounded-full hover:bg-yellow-300 font-bold transition duration-300 mt-4 md:mt-0"
            >
              Visit Our Store →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
