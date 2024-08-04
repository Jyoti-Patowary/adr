
"use client"; 

import { useEffect, useState } from 'react';

export default function ClientComponent({ initialData }) {
  const [data, setData] = useState(initialData);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/some-endpoint');
      const newData = await response.json();
      setData(newData);
    }

    if (!data) {
      fetchData();
    }
  }, [data]);

  const handleBookNow = () => {
    const whatsappLink = `https://wa.me/?phone=919954915939&text=Hi%20I%27m%20interested%20in%20the%20${encodeURIComponent(data.brand)}%20${encodeURIComponent(data.model)}.%20Booking%20Dates%3A%20From%20${encodeURIComponent(startDate)}%20To%20${encodeURIComponent(endDate)}.%20Please%20confirm%20availability.%20Thank%20you!`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div>
     
      {data ? (
        <div>
          <h1>{data.brand} {data.model}</h1>
          <input 
            type="date" 
            value={startDate} 
            onChange={(e) => setStartDate(e.target.value)} 
          />
          <input 
            type="date" 
            value={endDate} 
            onChange={(e) => setEndDate(e.target.value)} 
          />
          <button onClick={handleBookNow}>Book Now</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
