'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
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

  return (
    <>
      <div ref={heroRef} >
        {/* Hero Section Content */}
      </div>
      <nav
        ref={navbarRef}
        className={`bg-amber-300 dark:bg-gray-800 ${isSticky ? 'fixed top-0 left-0 w-full z-50' : ''}`}
      >
        <div className="container mx-auto px-8 flex items-center justify-between">
          <div className="">
            <h1 className="text-2xl font-semibold">
              <a href="/">
                <Image src="/adr.png" alt="" width={100} height={100} />
              </a>
            </h1>
          </div>
          <div className="flex items-center justify-between gap-8">
            <div className="flex justify-end">
              <ul className="list-none flex space-x-6">
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-between gap-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
              {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
