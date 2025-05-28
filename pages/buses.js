'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export default function RideConfirmed() {
  const searchParams = useSearchParams();
  const pickup = searchParams.get('pickup');
  const dropoff = searchParams.get('dropoff');
  const offer = searchParams.get('offer');
  const name = searchParams.get('name');

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [driver, setDriver] = useState(null);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsConfirmed(true);
      setDriver({
        name: 'Driver Name',
        carType: 'Car Type',
        plateNumber: 'Plate Number',
        estimatedArrival: '4 minutes',
      });
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      @keyframes blueBlackFade {
        0% { color: #00c6ff; }
        50% { color: #000000; }
        100% { color: #00c6ff; }
      }
      .fade-letter {
        display: inline-block;
        animation: blueBlackFade 2.5s ease-in-out infinite;
      }
      .fade-letter:nth-child(1) { animation-delay: 0s; }
      .fade-letter:nth-child(2) { animation-delay: 0.2s; }
      .fade-letter:nth-child(3) { animation-delay: 0.4s; }
      .fade-letter:nth-child(4) { animation-delay: 0.6s; }
      .fade-letter:nth-child(5) { animation-delay: 0.8s; }
      .fade-letter:nth-child(6) { animation-delay: 1s; }
      .fade-letter:nth-child(7) { animation-delay: 1.2s; }
      .fade-letter:nth-child(8) { animation-delay: 1.4s; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
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
      <h1 style={logoStyle}>
        {'NEXRIDE'.split('').map((char, index) => (
          <span key={index} className="fade-letter">{char}</span>
        ))}
      </h1>

      <h2 style={title}>Find Your Bus</h2>

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

      <div style={{ marginTop: '2rem' }}>
        {!isConfirmed ? (
          <div style={waitingCard}>Waiting for driver confirmation...</div>
        ) : (
          <div style={confirmedCard}>CONFIRMED</div>
        )}
      </div>

      {isConfirmed && driver && (
        <div style={driverInfo}>
          <p>Driver: <strong>{driver.name}</strong></p>
          <p>Car Type: <strong>{driver.carType}</strong></p>
          <p>Plate Number: <strong>{driver.plateNumber}</strong></p>
          <p>Estimated Arrival: <strong>{driver.estimatedArrival}</strong></p>
        </div>
      )}

      <footer style={footerStyle}>NexRide © 2025</footer>
    </div>
  );
}

// ========== Styles ==========

const container = {
  padding: '2rem',
  fontFamily: 'Segoe UI, sans-serif',
  backgroundImage: 'url("/nexridebackground7.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center top',
  backgroundColor: '#000',
  minHeight: '100vh',
  color: '#fff',
  textAlign: 'center',
};

const logoStyle = {
  fontSize: '3.2rem',
  fontWeight: 'bold',
  marginBottom: '1.5rem',
  letterSpacing: '0.1em',
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

const waitingCard = {
  background: '#ffcc00',
  padding: '1rem 2rem',
  borderRadius: '12px',
  fontSize: '1.2rem',
  animation: 'pulse 1.5s infinite',
  color: '#000',
  fontWeight: 'bold',
  textAlign: 'center',
};

const confirmedCard = {
  background: '#00c851',
  padding: '1.2rem 2rem',
  borderRadius: '12px',
  fontSize: '1.5rem',
  color: '#fff',
  fontWeight: 'bold',
  animation: 'blink 1s infinite',
  textAlign: 'center',
};

const driverInfo = {
  marginTop: '2rem',
  padding: '1rem',
  background: '#1e1e1e',
  borderRadius: '10px',
  border: '1px solid #444',
  lineHeight: '1.6',
  width: '100%',
  maxWidth: '400px',
};

const footerStyle = {
  marginTop: '4rem',
  fontSize: '0.9rem',
  color: '#aaa',
  textAlign: 'center',
};
