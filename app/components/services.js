// components/ServicesCard.js

import React from 'react';
import { FaCar, FaUserTie, FaCogs, FaShower, FaTruckMoving, FaWrench, FaGift, FaShippingFast } from 'react-icons/fa';

const services = [
  { name: 'Vehicle Rental', icon: <FaCar /> },
  { name: 'Driver Rent', icon: <FaUserTie /> },
  { name: 'Accessories', icon: <FaCogs /> },
  { name: 'Washing', icon: <FaShower /> },
  { name: 'Vehicle Towing', icon: <FaTruckMoving /> },
  { name: 'Wedding Decor for Vehicles', icon: <FaGift /> },
  { name: 'Vehicle Repairing', icon: <FaWrench /> },
  { name: 'Vehicle Transportation', icon: <FaShippingFast /> },
];

const ServicesCard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 font-poppins">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center w-48 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl text-blue-500 mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold">{service.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
