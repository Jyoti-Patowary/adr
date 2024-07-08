'use client'

import React, { useState } from 'react';

const vehicleData = [
  {
    title: 'Honda Civic',
    description: 'A compact car with great fuel efficiency.',
    imageUrl: 'https://via.placeholder.com/300x150',
    price: '$50/day',
    category: 'Car',
    brand: 'Honda',
  },
  {
    title: 'Toyota Corolla',
    description: 'A reliable and comfortable sedan.',
    imageUrl: 'https://via.placeholder.com/300x150',
    price: '$55/day',
    category: 'Car',
    brand: 'Toyota',
  },
  {
    title: 'Harley Davidson',
    description: 'A powerful bike for thrilling rides.',
    imageUrl: 'https://via.placeholder.com/300x150',
    price: '$80/day',
    category: 'Bike',
    brand: 'Harley Davidson',
  },
  {
    title: 'Honda Scooty',
    description: 'A convenient scooty for daily commuting.',
    imageUrl: 'https://via.placeholder.com/300x150',
    price: '$30/day',
    category: 'Scooty',
    brand: 'Honda',
  },
  // Add more vehicles as needed
];

const categories = ['All', 'Car', 'Bike', 'Scooty'];

const VehicleCard = ({ title, description, imageUrl, price }) => {
  return (
    <div className="flex flex-col p-6 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="mt-4 text-center">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <p className="mt-2 text-lg font-semibold">{price}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">Book Now</button>
      </div>
    </div>
  );
};

const VehicleListings = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedBrand('');
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  const filteredVehicles = vehicleData.filter((vehicle) => {
    if (selectedCategory !== 'All' && vehicle.category !== selectedCategory) {
      return false;
    }
    if (selectedBrand && vehicle.brand !== selectedBrand) {
      return false;
    }
    return true;
  });

  const brands = Array.from(
    new Set(
      vehicleData
        .filter((vehicle) => selectedCategory === 'All' || vehicle.category === selectedCategory)
        .map((vehicle) => vehicle.brand)
    )
  );

  return (
    <div className="container mx-auto p-6" id="vehicle-listings">
      <h2 className="text-3xl font-bold text-center mb-6">Available Vehicles</h2>
      <div className="flex justify-center mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`mx-2 px-4 py-2 rounded-lg ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {selectedCategory !== 'All' && (
        <div className="flex justify-center mb-6">
          {brands.map((brand) => (
            <button
              key={brand}
              className={`mx-2 px-4 py-2 rounded-lg ${selectedBrand === brand ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              onClick={() => handleBrandChange(brand)}
            >
              {brand}
            </button>
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredVehicles.map((vehicle, index) => (
          <VehicleCard
            key={index}
            title={vehicle.title}
            description={vehicle.description}
            imageUrl={vehicle.imageUrl}
            price={vehicle.price}
          />
        ))}
      </div>
    </div>
  );
};

export default VehicleListings;
