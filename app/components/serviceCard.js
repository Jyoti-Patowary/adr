import Image from 'next/image';
import React from 'react';

export default function Services() {
  const servicesData = [
    {
      title: 'Service 1',
      description: 'Description for Service 1',
      imageUrl: 'https://via.placeholder.com/300x150',
    },
    {
      title: 'Service 2',
      description: 'Description for Service 2',
      imageUrl: 'https://via.placeholder.com/300x150',
    },
    {
      title: 'Service 3',
      description: 'Description for Service 3',
      imageUrl: 'https://via.placeholder.com/300x150',
    },
    // Add more services as needed
  ];

  const ServiceCard = ({ title, description, imageUrl }) => {
    return (
      <div className="flex flex-col p-6 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300">
        <Image className="w-full h-48 object-cover" src={imageUrl} alt="Service Image" />
        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1 className="text-3xl py-8 font-bold text-center mt-6">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
