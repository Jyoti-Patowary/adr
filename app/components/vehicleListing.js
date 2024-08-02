'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function VehicleListings() {
  const [vehicles, setVehicles] = useState([]);
  const [filter, setFilter] = useState('All');
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch(`/api/vehicles?filter=${filter}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setVehicles(data);
      } catch (error) {
        console.error('Failed to fetch vehicles:', error);
        // setError('Failed to load vehicles');
      }
    };

    fetchVehicles();
  }, [filter]);

  const isVehiclesPage = router.pathname === '/vehicles';
  const displayedVehicles = isVehiclesPage ? vehicles : vehicles.slice(0, 9);

  return (
    <div className={`container ${isVehiclesPage ? 'flex flex-col lg:flex-row' : 'flex flex-col items-center'} bg-white p-4 py-14 sm:p-6 md:p-8 lg:p-10`}>
      {isVehiclesPage ? (
        <>
          <div className="flex flex-col lg:w-1/4 mb-8 lg:mb-0">
            <div className="flex flex-wrap mb-4">
              {['All', 'Cars', 'Bikes', 'Scooters'].map(tab => (
                <button
                  key={tab}
                  className={`w-full px-4 py-2 text-lg font-medium rounded-lg transition-colors mb-2 ${filter === tab ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500 hover:text-white`}
                  onClick={() => setFilter(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="text-center">
              <Link href="/all-vehicles" className="block px-4 py-2 text-lg font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                View All Vehicles
              </Link>
            </div>
          </div>

          <div className={`flex-1 ${isVehiclesPage ? 'w-full' : 'lg:w-3/4'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {displayedVehicles.length > 0 ? (
                displayedVehicles.map(vehicle => (
                  <div
                    key={vehicle._id}
                    className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={vehicle.imageUrl || '/placeholder.jpg'}
                        alt={`${vehicle.brand} ${vehicle.model}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">{vehicle.brand} {vehicle.model}</h3>
                      <p className="text-gray-600 mb-4 text-sm sm:text-base">{vehicle.description}</p>
                      <div className="flex justify-between items-center text-sm sm:text-base">
                        <span className="text-lg font-medium text-gray-800">₹{vehicle.rent_per_day}/day</span>
                        <span className={`px-3 py-1 rounded-full text-white ${vehicle.availability ? 'bg-green-500' : 'bg-red-500'}`}>
                          {vehicle.availability ? 'Available' : 'Not Available'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center col-span-full">No vehicles available</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-center pb-4 font-poppins">Rent a Ride</h1>
          <h4 className='pb-8 text-base sm:text-lg md:text-xl text-center px-4 sm:px-8 md:px-16'>Browse our cars, bikes, and scooters for unbeatable comfort and performance. Adventure is just a rental away!</h4>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          <div className="flex flex-wrap justify-center mb-8">
            {['All', 'Cars', 'Bikes', 'Scooters'].map(tab => (
              <button
                key={tab}
                className={`px-4 py-2 mx-1 sm:mx-2 text-base sm:text-lg font-medium rounded-lg transition-colors ${filter === tab ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500 hover:text-white`}
                onClick={() => setFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {displayedVehicles.length > 0 ? (
              displayedVehicles.map(vehicle => (
                <div
                  key={vehicle._id}
                  className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={vehicle.imageUrl || '/placeholder.jpg'}
                      alt={`${vehicle.brand} ${vehicle.model}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{vehicle.brand} {vehicle.model}</h3>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">{vehicle.description}</p>
                    <div className="flex justify-between items-center text-sm sm:text-base">
                      <span className="text-lg font-medium text-gray-800">₹{vehicle.rent_per_day}/day</span>
                      <span className={`px-3 py-1 rounded-full text-white ${vehicle.availability ? 'bg-green-500' : 'bg-red-500'}`}>
                        {vehicle.availability ? 'Available' : 'Not Available'}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">No vehicles available</p>
            )}
          </div>

          <div className="text-center pt-4">
            <Link href="/vehicles" className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300">
              View All Vehicles →
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
