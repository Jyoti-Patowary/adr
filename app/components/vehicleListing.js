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
        setError('Failed to load vehicles');
      }
    };

    fetchVehicles();
  }, [filter]);

  // Determine the current page based on the URL
  const isVehiclesPage = router.pathname === '/vehicles';

  // Show only the first 9 vehicles if not on the vehicles page
  const displayedVehicles = isVehiclesPage ? vehicles : vehicles.slice(0, 9);

  return (
    <div className={`container ${isVehiclesPage ? 'flex flex-col lg:flex-row' : 'flex flex-col items-center'} bg-white p-8 py-20`}>
      {isVehiclesPage ? (
        // Vehicles Page Layout
        <>
          <div className="flex-1 lg:w-1/4 mb-8 lg:mb-0">
            {/* Filter Panel */}
            <div className="flex flex-col items-start mb-14">
              {['All', 'Cars', 'Bikes', 'Scooters'].map(tab => (
                <button
                  key={tab}
                  className={`w-full px-6 py-3 mb-2 text-lg font-medium rounded-lg transition-colors ${filter === tab ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500 hover:text-white`}
                  onClick={() => setFilter(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* View All Vehicles Button */}
            <div className="text-center">
              <Link href="/all-vehicles" className="px-6 py-3 text-lg font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                View All Vehicles
              </Link>
            </div>
          </div>

          <div className={`flex-1 ${isVehiclesPage ? 'w-full' : 'lg:w-3/4'}`}>
            {/* Vehicle Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
                      <h3 className="text-2xl font-semibold mb-2">{vehicle.brand} {vehicle.model}</h3>
                      <p className="text-gray-600 mb-4">{vehicle.description}</p>
                      <div className="flex justify-between items-center">
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
        // Home Page Layout
        <>
          <h1 className="text-6xl font-bold text-center pb-4 font-comforter">Rent a Ride</h1>
          <h4 className='pb-10 font-poppins text-center font-normal text-lg px-40'>Browse our cars, bikes, and scooters for unbeatable comfort and performance. Adventure is just a rental away!</h4>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* Filter Buttons */}
          <div className="flex justify-center mb-14">
            {['All', 'Cars', 'Bikes', 'Scooters'].map(tab => (
              <button
                key={tab}
                className={`px-6 py-3 mx-2 text-lg font-medium rounded-lg transition-colors ${filter === tab ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500 hover:text-white`}
                onClick={() => setFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Vehicle Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
                    <h3 className="text-2xl font-semibold mb-2">{vehicle.brand} {vehicle.model}</h3>
                    <p className="text-gray-600 mb-4">{vehicle.description}</p>
                    <div className="flex justify-between items-center">
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

          {/* View All Vehicles Button */}
          <div className="text-center pt-6">
            <Link href="/vehicles" className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300">
              View All Vehicles →
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
