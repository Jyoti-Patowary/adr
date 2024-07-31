'use client';

import { useState, useEffect } from 'react';
import Select from 'react-select';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { fetchVehicles, fetchBrands } from '../lib/api';

const VehiclePage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [brands, setBrands] = useState([]);
  const [filters, setFilters] = useState({
    type: 'cars',
    filter: 'All',
    brand: '',
    priceRange: [600, 920],
    rating: 4,
    location: 'Jakarta',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const loadVehicles = async () => {
      try {
        const data = await fetchVehicles(filters);
        setVehicles(data);
      } catch (error) {
        setError('Failed to fetch vehicles.');
      }
    };

    const loadBrands = async () => {
      try {
        const data = await fetchBrands(filters.type);
        setBrands(data);
      } catch (error) {
        setError('Failed to fetch brands.');
      }
    };

    loadVehicles();
    loadBrands();
  }, [filters]);

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="flex pt-20 bg-gray-100 min-h-screen">
      {/* Filters */}
      <div className="w-1/4 p-6 bg-white shadow-md border-r border-gray-200">
        <h2 className="text-2xl font-bold mb-6">Filter Products</h2>

        {/* Type Filter */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Type</h3>
          <Select
            options={[
              { label: 'Cars', value: 'cars' },
              { label: 'Bikes', value: 'bikes' },
              { label: 'Scooters', value: 'scooters' },
            ]}
            onChange={(option) => handleFilterChange('type', option ? option.value : 'cars')}
            className="w-full"
            value={{ label: filters.type.charAt(0).toUpperCase() + filters.type.slice(1), value: filters.type }}
            placeholder="Select Type"
          />
        </div>

        {/* Brand Filter */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Brand</h3>
          <Select
            options={brands.map(brand => ({ label: brand, value: brand }))}
            onChange={(option) => handleFilterChange('brand', option ? option.value : '')}
            className="w-full"
            value={brands.find(b => b === filters.brand) ? { label: filters.brand, value: filters.brand } : null}
            placeholder="Select Brand"
          />
        </div>

        {/* Price Range Filter */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Price Range</h3>
          <Slider
            range
            min={600}
            max={920}
            defaultValue={filters.priceRange}
            onChange={(value) => handleFilterChange('priceRange', value)}
            handleStyle={{ borderColor: '#4A90E2', backgroundColor: '#4A90E2' }}
            railStyle={{ backgroundColor: '#D0D0D0' }}
            trackStyle={{ backgroundColor: '#4A90E2' }}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>${filters.priceRange[0]} CAD</span>
            <span>${filters.priceRange[1]} CAD</span>
          </div>
        </div>

        {/* Location Filter */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <Select
            id="location"
            name="location"
            options={[{ label: 'Jakarta', value: 'Jakarta' }, { label: 'Semarang', value: 'Semarang' }]}
            onChange={(option) => handleFilterChange('location', option ? option.value : '')}
            className="w-full"
            value={{ label: filters.location, value: filters.location }}
            placeholder="Select Location"
          />
        </div>

        <button
          onClick={() => setFilters({ type: 'cars', filter: 'All', brand: '', priceRange: [600, 920], rating: 4, location: 'Jakarta' })}
          className="w-full bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-red-600 transition"
        >
          Clear Filters
        </button>
      </div>

      {/* Vehicle Listings */}
      <div className="w-3/4 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Catalog Vehicles</h1>
          <div>
            {/* Add sorting or other actions here */}
            <Select
              options={[
                { label: 'Popular Vehicle', value: 'popular' },
                { label: 'Newest Vehicle', value: 'newest' },
              ]}
              onChange={(option) => handleFilterChange('sort', option ? option.value : '')}
              className="w-full"
              placeholder="Sort by"
            />
          </div>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {vehicles.map(vehicle => (
            <div key={vehicle._id} className="bg-white p-4 rounded-md shadow-md border border-gray-200">
              <img src={vehicle.imageUrl || '/default-car.jpg'} alt={vehicle.model} className="w-full h-40 object-cover mb-4 rounded-md" />
              <h3 className="text-lg font-semibold">{vehicle.brand} {vehicle.model}</h3>
              <p className="text-gray-600">${vehicle.rent_per_day} CAD/day</p>
              <p className="text-gray-500">{vehicle.description}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehiclePage;
