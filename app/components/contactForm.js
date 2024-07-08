import React from 'react';

const ContactForm = () => {
  return (
    <div className="container mx-auto p-6" id="contact">
      <h2 className="text-3xl font-bold text-center">Contact Us</h2>
      <form className="mt-6 max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full px-4 py-2 border rounded-lg" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
