'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi'; // Import icons for menu

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current && heroRef.current) {
        const navbarHeight = navbarRef.current.offsetHeight;
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;

        if (heroBottom <= navbarHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div ref={heroRef}>
        {/* Hero Section Content */}
      </div>
      <nav
        ref={navbarRef}
        className={`bg-stone-950 dark:bg-gray-800 ${isSticky ? 'fixed top-0 left-0 w-full z-50' : ''}`}
      >
        <div className="container mx-auto px-8 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">
              <a href="/">
                <Image src="/logo.png" alt="ADR Logo" width={100} height={100} />
              </a>
            </h1>
          </div>
          <div className="flex items-center justify-between gap-8">
            {/* Hamburger Icon for Mobile */}
            <button
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <HiX size={30} color='white' /> : <HiMenu size={30} color='white'/>}
            </button>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-between gap-8">
              <ul className="list-none flex space-x-6 font-medium font-poppins text-white">
                <li className='hover:text-blue-700'><a href="/">Home</a></li>
                {/* <li className='hover:text-blue-700'><a href="/vehicles">Rent a Ride</a></li> */}
                <li className='hover:text-blue-700'><a href="/about">About</a></li>
                {/* <li className='hover:text-blue-700'><a href="/store">Our Store</a></li> */}
                <li className='hover:text-blue-700'><a href="/contact">Contact</a></li>
              </ul>
              <div className="flex items-center justify-between gap-2">
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium font-poppins py-2 px-4 rounded">Login</button> */}
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button> */}
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-yellow-300 dark:bg-gray-800 py-4 min-h-screen h-fix">
            <ul className="list-none flex flex-col items-center space-y-4">
              <li><a href="/home">Home</a></li>
              {/* <li><a href="/rent">Rent a Ride</a></li> */}
              <li><a href="/about">About</a></li>
              {/* <li><a href="/store">Our Store</a></li> */}
              <li><a href="/contact">Contact</a></li>
              <div className="flex items-center justify-between gap-2">
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button> */}
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button> */}
              </div>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
