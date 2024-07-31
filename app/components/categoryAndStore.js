

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CategoriesAndStore() {
  const categoriesData = [
        {
          title: 'Cars',
          amount: 'Rs. 1,799',
          imageUrl: '/cars/duster.jpg',
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
    <div className="py-16 container px-8">
      <h1 className="text-6xl font-bold font-comforter text-center pb-16">Our Categories</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 w-full md:w-1/3 h-full">
          <div className="relative w-full h-96">
            <Image
              src={categoriesData[0].imageUrl}
              alt={categoriesData[0].title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-md">
              <p className="text-lg font-semibold">{categoriesData[0].title}</p>
              <p className="text-sm text-gray-600 ">Starts from {categoriesData[0].amount}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-2/3 gap-1">
          <div className="flex flex-col md:flex-row gap-6">
            {categoriesData.slice(1).map((category, index) => (
              <div key={index} className="relative flex flex-col bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 w-full md:w-1/2">
                <div className="relative w-full h-64 md:h-64">
                  <Image
                    src={category.imageUrl}
                    alt={category.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-md">
                  <p className="text-sm font-bold">{category.title}</p>
                <p className="text-sm text-gray-600">Starts from {category.amount}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-black text-white p-9 rounded-lg mt-6 flex flex-row items-center justify-between">
            <div className=''>
            <h2 className="text-lg font-semibold text-center">
              We have an accessories store for all vehicles and gears related to vehicles.
            </h2>
            </div>
            <div className=''>
            <Link
              href="https://your-store-url.com"
              className="bg-white text-black py-2 px-4 rounded-full hover:bg-yellow-300 font-bold transition duration-300"
            >
              Visit Our Store  →
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
