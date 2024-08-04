
import { notFound } from 'next/navigation';
import VehicleDetailsClient from './VehicleDetailsClient';
import FAQ from '../../components/faq';

async function fetchVehicle(id) {
  try {
    const response = await fetch('http://localhost:3000/api/vehicles');
    if (!response.ok) throw new Error('Network response was not ok');
    const vehicles = await response.json();
    return vehicles.find(vehicle => vehicle._id === id);
  } catch (error) {
    console.error('Failed to fetch vehicle:', error);
    return null;
  }
}

export default async function VehicleDetails({ params }) {
  const { id } = params;
  const vehicle = await fetchVehicle(id);

  if (!vehicle) {
    notFound(); 
    return null; 
  }

  return (
    <div className='bg-white'>
    <div className="container p-4 py-14 sm:p-6 md:p-8 lg:p-10">
      <VehicleDetailsClient vehicle={vehicle} />
    </div>
      <FAQ/>
    </div>
  );
}
