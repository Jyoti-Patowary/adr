'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function VehicleDetailsClient({ vehicle }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleBookNow = () => {
    const whatsappLink = `https://wa.me/${encodeURIComponent('919954915939')}?text=${encodeURIComponent(
      `Hi%20I'm%20interested%20in%20the%20${vehicle.brand}%20${vehicle.model}.%20Booking%20Dates%3A%20From%20${startDate}%20To%20${endDate}.%20Please%20confirm%20availability.%20Thank%20you!`
    )}`;
    
    window.open(whatsappLink, '_blank');
  };
  

  return (
    <div className="flex flex-col md:flex-row pt-24 md:pb-20 px-2 md:px-4 lg:px-8">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <div className="relative h-96 w-full">
          <Image
            src={vehicle.imageUrl || '/placeholder.jpg'}
            alt={`${vehicle.brand} ${vehicle.model}`}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">{vehicle.brand} {vehicle.model}</h1>
        <p className={`px-3 mb-4 py-1 w-auto max-w-max rounded-lg text-white ${vehicle.availability ? 'bg-green-500' : 'bg-red-500'}`}>
          {vehicle.availability ? 'Available' : 'Not Available'}
        </p>
        <p className="text-gray-700 mb-4">{vehicle.description}</p>
        <p className="text-lg font-medium mb-4">Price - ₹{vehicle.rent_per_day}/day</p>
        <p className="mt-4">Last Service Date - {formatDate(vehicle.last_service_date)}</p>

        <div className="mt-6 mb-4 flex gap-4 flex-row md:gap-7 items-center">
          <div className="flex flex-col md:flex-row gap-4">
            <label htmlFor="start-date" className="text-lg font-medium md:pt-2 text-gray-700">Booking Dates</label>
            <div className='flex items-center gap-2 md:gap-4'>
              <input
                type="date"
                id="start-date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="p-2 border-black bg-gray-200 rounded-md shadow-sm w-[9.5em] md:w-auto"
              />
              <span className="text-lg font-medium">-</span>
              <input
                type="date"
                id="end-date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="p-2 border-black bg-gray-200 rounded-md shadow-sm w-[9.5em] md:w-auto"
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleBookNow}
          className="bg-black w-full text-white py-4 px-4 rounded-lg mt-7 hover:bg-yellow-300 hover:text-black font-bold transition duration-300"
        >
          Book Now →
        </button>
      </div>
    </div>
  );
}

// Helper function for date formatting
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-GB'); // 'en-GB' for DD/MM/YYYY
};
