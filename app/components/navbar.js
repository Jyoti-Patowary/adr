'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-stone-950 dark:bg-gray-800 fixed top-0 left-0 w-full z-50 shadow-md transition-shadow duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">
              <a href="/">
                <Image src="/logo.png" alt="ADR Logo" width={100} height={100} />
              </a>
            </h1>
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            {/* Hamburger Icon for Mobile */}
            <button
              className="md:hidden text-white"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <ul className="list-none flex space-x-6 font-medium text-white">
                <li className='hover:text-blue-700'><a href="/">Home</a></li>
                {/* <li className='hover:text-blue-700'><a href="/vehicles">Rent a Ride</a></li> */}
                <li className='hover:text-blue-700'><a href="/about">About</a></li>
                {/* <li className='hover:text-blue-700'><a href="/partner-with-adr">Partner With ADR</a></li> */}
                <li className='hover:text-blue-700'><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-yellow-300 dark:bg-gray-800 py-4 min-h-screen">
            <ul className="list-none flex flex-col items-center space-y-4">
              <li><a href="/" className="text-xl text-gray-900 dark:text-gray-100">Home</a></li>
              {/* <li><a href="/rent" className="text-xl text-gray-900 dark:text-gray-100">Rent a Ride</a></li> */}
              <li><a href="/about" className="text-xl text-gray-900 dark:text-gray-100">About</a></li>
              {/* <li><a href="/store" className="text-xl text-gray-900 dark:text-gray-100">Our Store</a></li> */}
              <li><a href="/contact" className="text-xl text-gray-900 dark:text-gray-100">Contact</a></li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
