'use client';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BusDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [bus, setBus] = useState(null);

  const buses = [
    { id: 1, name: 'City Express', from: 'Nairobi', to: 'Mombasa', seats: 12, price: 800, time: '10:30 AM' },
    { id: 2, name: 'Highway Star', from: 'Kisumu', to: 'Nakuru', seats: 5, price: 600, time: '11:15 AM' },
    { id: 3, name: 'Night Rider', from: 'Eldoret', to: 'Nairobi', seats: 8, price: 750, time: '9:45 AM' },
  ];

  useEffect(() => {
    const found = buses.find((b) => b.id === parseInt(id));
    setBus(found);
  }, [id]);

  if (!bus) {
    return (
      <div style={container}>
        <p>Bus not found...</p>
        <button style={button} onClick={() => router.push('/buses')}>
          Back to Search
        </button>
      </div>
    );
  }

  return (
    <div style={container}>
      <h1>{bus.name}</h1>
      <p><strong>Route:</strong> {bus.from} → {bus.to}</p>
      <p><strong>Seats Available:</strong> {bus.seats}</p>
      <p><strong>Price:</strong> KES {bus.price}</p>
      <p><strong>Departure:</strong> {bus.time}</p>
      <button style={button} onClick={() => alert('Booking confirmed!')}>
        Confirm Booking
      </button>
      <button style={{ ...button, marginTop: '1rem', backgroundColor: '#ffffff', color: '#003366' }} onClick={() => router.push('/buses')}>
        Back to Buses
      </button>
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

const button = {
  marginTop: '2rem',
  padding: '0.8rem 1.5rem',
  backgroundColor: '#00ffcc',
  border: 'none',
  borderRadius: '8px',
  color: '#003366',
  fontWeight: 'bold',
  cursor: 'pointer',
};
