'use client';

import React, { useEffect, useState } from 'react';


const WeAreGoingLiveSoon = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000);
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="font-comforter mx-1">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="relative w-full h-screen bg-gray-800 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-6xl font-comforter mb-4">We Are Going Live Soon</h1>
      <p className="text-2xl mb-8">Our website is almost ready. Stay tuned for the launch!</p>
      <div className="text-3xl">
        {timerComponents.length ? timerComponents : <span>Time&apos;s up!</span>}
      </div>
    </div>
  );
};

export default WeAreGoingLiveSoon;
