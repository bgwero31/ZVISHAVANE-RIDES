'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Buses() {
  const router = useRouter();

  const buses = [
    { id: 1, name: 'City Express', from: 'Nairobi', to: 'Mombasa', seats: 12, price: 800, time: '10:30 AM' },
    { id: 2, name: 'Highway Star', from: 'Kisumu', to: 'Nakuru', seats: 5, price: 600, time: '11:15 AM' },
    { id: 3, name: 'Night Rider', from: 'Eldoret', to: 'Nairobi', seats: 8, price: 750, time: '9:45 AM' },
  ];

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('recentSearch'));
    if (stored) {
      setFrom(stored.from);
      setTo(stored.to);
      setTravelDate(stored.travelDate);
    }
  }, []);

  const handleSearch = () => {
    const found = buses.filter(
      (bus) =>
        bus.from.toLowerCase() === from.toLowerCase() &&
        bus.to.toLowerCase() === to.toLowerCase()
    );
    setResults(found);

    localStorage.setItem(
      'recentSearch',
      JSON.stringify({ from, to, travelDate })
    );
  };

  const handleBook = (id) => {
    router.push(`/bus/${id}`);
  };

  return (
    <div style={container}>
      <h1 style={title}>Find Your Bus</h1>

      <div style={searchContainer}>
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          style={input}
        />
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          style={input}
        />
        <input
          type="date"
          value={travelDate}
          onChange={(e) => setTravelDate(e.target.value)}
          style={input}
        />
        <button onClick={handleSearch} style={button}>Search</button>
      </div>

      <div style={grid}>
        {results.map((bus) => (
          <div key={bus.id} style={card}>
            <h2>{bus.name}</h2>
            <p>{bus.from} → {bus.to}</p>
            <p>Seats Available: {bus.seats}</p>
            <p>Price: KES {bus.price}</p>
            <p>Pickup Time: {bus.time}</p>
            <p>Travel Date: {travelDate}</p>
            <button style={button} onClick={() => handleBook(bus.id)}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const container = {
  padding: '2rem',
  fontFamily: 'Segoe UI, sans-serif',
  background: 'linear-gradient(135deg, #000428, #004e92)',
  minHeight: '100vh',
  color: '#fff',
  textAlign: 'center',
};

const title = {
  fontSize: '2rem',
  marginBottom: '1.5rem',
};

const searchContainer = {
  marginBottom: '2rem',
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  flexWrap: 'wrap',
};

const input = {
  padding: '0.8rem',
  borderRadius: '5px',
  border: 'none',
  fontSize: '1rem',
  width: '180px',
};

const button = {
  padding: '0.8rem 1.5rem',
  backgroundColor: '#00ffcc',
  border: 'none',
  borderRadius: '8px',
  color: '#003366',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '1.5rem',
};

const card = {
  padding: '1rem',
  backgroundColor: '#ffffff11',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};
