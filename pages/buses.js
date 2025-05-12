'use client';
import { useState } from 'react';

export default function Buses() {
  const buses = [
    { id: 1, name: 'City Express', from: 'Nairobi', to: 'Mombasa', seats: 12, price: 800, time: '10:30 AM' },
    { id: 2, name: 'Highway Star', from: 'Kisumu', to: 'Nakuru', seats: 5, price: 600, time: '11:15 AM' },
    { id: 3, name: 'Night Rider', from: 'Eldoret', to: 'Nairobi', seats: 8, price: 750, time: '9:45 AM' },
  ];

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const found = buses.filter(
      (bus) =>
        bus.from.toLowerCase() === from.toLowerCase() &&
        bus.to.toLowerCase() === to.toLowerCase()
    );
    setResults(found);
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
            <button style={button}>Book Now</button>
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
};

const title = {
  textAlign: 'center',
  marginBottom: '2rem',
};

const searchContainer = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  marginBottom: '2rem',
};

const input = {
  padding: '0.6rem',
  borderRadius: '6px',
  border: '1px solid #ccc',
  width: '150px',
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1.5rem',
};

const card = {
  backgroundColor: '#003366',
  padding: '1.5rem',
  borderRadius: '12px',
  textAlign: 'center',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
};

const button = {
  marginTop: '1rem',
  padding: '0.6rem 1.2rem',
  backgroundColor: '#00bfff',
  border: 'none',
  borderRadius: '8px',
  color: '#fff',
  fontWeight: 'bold',
  cursor: 'pointer',
};
