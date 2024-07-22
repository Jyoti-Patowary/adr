import Image from 'next/image';
import React from 'react';

export default function Services() {
  const servicesData = [
    {
      title: 'Quality and Variety',
      description: 'We offer a diverse selection of bikes to meet your unique needs and preferences.',
      icon: '/icons/high-quality.png', 
    },
    {
      title: 'Affordable Rates',
      description: 'Enjoy competitive pricing with no hidden fees, making rentals accessible for everyone.',
      icon: '/icons/funding.png',  
    },
    // {
    //   title: 'Easy Booking Process',
    //   description: 'With our user-friendly platform, renting a bike is just a few clicks away.',
    //   icon: '/path/to/quality-icon.png',
    // },
    {
      title: 'Expert Maintenance',
      description: 'Our bikes are expertly maintained by our dedicated team to guarantee a smooth and safe ride.',
      icon: '/icons/optimizing.png',
    },
    {
      title: 'Customer Satisfaction',
      description: 'We are committed to providing exceptional customer service and ensuring you have the best possible experience.',
      icon: '/icons/customer-review.png',
    }
  ];

  const ServiceCard = ({ title, description, icon }) => {
    return (
      <div className="flex flex-col items-center bg-black text-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300">
        <Image className="w-20 h-20 mb-4" src={icon} alt={`${title} Icon`} height={200} width={200}/>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-center text-gray-400">{description}</p>
      </div>
    );
  };

  return (
    <div className="bg-black w-full flex items-center justify-center">
      <div className='py-16 container'>
      <h1 className="text-3xl font-bold text-center text-white mb-8">Why Choose ADR Rentals?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 pt-9">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
      </div>
    </div>
  );
}
