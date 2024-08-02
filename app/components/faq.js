'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importing icons from react-icons

const faqData = [
  {
    question: 'What is the minimum rental period?',
    answer: 'The minimum rental period is 24 hours.'
  },
  {
    question: 'What documents are required for renting a vehicle?',
    answer: 'You need to provide a valid driver’s license and a government-issued ID.'
  },
  {
    question: 'Can I cancel my booking?',
    answer: 'Yes, you can cancel your booking up to 24 hours before the rental period starts.'
  },
  {
    question: 'What types of vehicles are available for rent?',
    answer: 'We offer a wide range of vehicles, including bikes, cars, and scooters. Browse our selection to find the perfect vehicle for your needs.'
  },
  {
    question: 'What should I do if the vehicle breaks down?',
    answer: 'In case of a breakdown, contact our support line immediately for assistance.'
  },
  {
    question: 'How do I extend my rental period?',
    answer: 'You can extend your rental period by contacting our support team before the current rental period ends.'
  },
  {
    question: 'Are there any additional fees?',
    answer: 'Additional fees may apply for late returns or damage to the vehicle.'
  },
  {
    question: 'What is your policy on late returns?',
    answer: 'Late returns are subject to additional charges. Please contact us as soon as possible if you anticipate being late.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const halfLength = Math.ceil(faqData.length / 2);

  return (
    <div className="container mx-auto p-6 py-12" id="faq">
      <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {faqData.slice(0, halfLength).map((faq, index) => (
            <div key={index} className="bg-white p-4 rounded-sm shadow-md overflow-hidden">
              <button
                className="w-full flex items-center justify-between text-left font-semibold text-lg focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <FaChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              <div 
                className={`transition-max-height duration-500 ease-in-out ${openIndex === index ? 'max-h-[1000px]' : 'max-h-0'}`} 
                style={{ overflow: 'hidden' }}
              >
                <p className="mt-2 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {faqData.slice(halfLength).map((faq, index) => (
            <div key={index + halfLength} className="bg-white p-4 rounded-sm shadow-md overflow-hidden">
              <button
                className="w-full flex items-center justify-between text-left font-semibold text-lg focus:outline-none"
                onClick={() => toggleFAQ(index + halfLength)}
              >
                <span>{faq.question}</span>
                {openIndex === index + halfLength ? (
                  <FaChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <FaChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              <div 
                className={`transition-max-height duration-500 ease-in-out ${openIndex === index + halfLength ? 'max-h-[1000px]' : 'max-h-0'}`} 
                style={{ overflow: 'hidden' }}
              >
                <p className="mt-2 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
