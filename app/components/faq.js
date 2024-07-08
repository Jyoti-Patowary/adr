'use client'

import React, { useState } from 'react';

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
    question: 'Do you offer insurance with the rental?',
    answer: 'Yes, all our rentals include basic insurance coverage.'
  },
  {
    question: 'What should I do if the vehicle breaks down?',
    answer: 'In case of a breakdown, contact our 24/7 support line immediately for assistance.'
  },
  // Add more FAQs as needed
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-6" id="faq">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-md">
            <button
              className="w-full text-left font-semibold text-lg"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
