'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const categories = ['All', 'Car', 'Bike', 'Scooty'];

const VehicleCard = ({ title, description, imageUrl, price, className }) => (
  <div className={`relative bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
    <img className="w-full h-64 object-cover" src={imageUrl} alt={title} />
    <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white w-full">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-1">{description}</p>
      <p className="mt-1 text-lg font-semibold">{price}</p>
    </div>
  </div>
);

const VehicleListings = ({ isVehiclesPage }) => {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/vehicles');
        const data = await response.json();

        if (data && typeof data === 'object') {
          const allVehicles = [
            ...(data.bikes || []),
            ...(data.cars || []),
            ...(data.scooters || []),
          ];

          setVehicles(allVehicles);
          setFilteredVehicles(allVehicles);

          const uniqueBrands = Array.from(new Set(allVehicles.map(vehicle => vehicle.brand)));
          setBrands(uniqueBrands);
        } else {
          console.error('Data fetched is not in expected format:', data);
          setVehicles([]);
          setFilteredVehicles([]);
        }
      } catch (error) {
        console.error('Error fetching vehicle data:', error);
        setVehicles([]);
        setFilteredVehicles([]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!Array.isArray(vehicles)) {
      console.error('Vehicles is not an array:', vehicles);
      setFilteredVehicles([]);
      return;
    }

    const filtered = vehicles.filter(vehicle => {
      if (selectedCategory !== 'All' && vehicle.category !== selectedCategory) {
        return false;
      }
      if (selectedBrand && vehicle.brand !== selectedBrand) {
        return false;
      }
      return true;
    });
    setFilteredVehicles(filtered);
  }, [selectedCategory, selectedBrand, vehicles]);

  const handleCategoryChange = category => {
    setSelectedCategory(category);
    setSelectedBrand('');
  };

  const handleBrandChange = brand => {
    setSelectedBrand(brand);
  };

  let gridColsClass = 'grid-cols-1';
  if (filteredVehicles.length === 2) {
    gridColsClass = 'grid-cols-2';
  } else if (filteredVehicles.length > 2) {
    gridColsClass = 'sm:grid-cols-2 md:grid-cols-3';
  }

  return (
    <div className="bg-white">
      <div className="container px-11 pt-16 pb-11" id="vehicle-listings">
        <h2 className="text-3xl font-bold text-center mb-6 font-poppins">
          {isVehiclesPage ? 'Our Vehicles' : 'Rent a Ride'}
        </h2>
        <div className="flex justify-center mb-6">
          {categories.map(category => (
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
            {brands.map(brand => (
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
        <div className={`grid ${gridColsClass} gap-6`}>
          {filteredVehicles.length > 0 ? (
            filteredVehicles.map((vehicle, index) => (
              <VehicleCard
                key={index}
                title={vehicle.title}
                description={vehicle.description}
                imageUrl={vehicle.imageUrl}
                price={vehicle.price}
                className={filteredVehicles.length === 1 ? 'w-full' : ''}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No vehicles found.</p>
          )}
        </div>
        <div className="flex flex-col items-center pt-8">
          <Link href="/vehicles">
            <button className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300">
              View all vehicles →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleListings;
