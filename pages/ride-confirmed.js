'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function RideConfirmed() {
  const searchParams = useSearchParams();
  const pickup = searchParams.get('pickup');
  const dropoff = searchParams.get('dropoff');
  const offer = searchParams.get('offer');
  const name = searchParams.get('name');

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [driver, setDriver] = useState(null); // Placeholder for Firebase

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

      @keyframes fadeBlueBlack {
        0% { color: #00c6ff; }
        50% { color: #000000; }
        100% { color: #00c6ff; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>NEXRIDE</h1>

      <h2 style={titleStyle}>Ride Confirmed!</h2>
      <p><strong>{name}</strong>, your ride from <strong>{pickup}</strong> to <strong>{dropoff}</strong> has been booked.</p>
      <p>Offer: <strong>${offer}</strong></p>

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

      <footer style={footerStyle}>
        NexRide © 2025
      </footer>
    </div>
  );
}

// Styles
const containerStyle = {
  padding: '2rem',
  color: '#fff',
  minHeight: '100vh',
  backgroundImage: 'url("/nexridebackground8.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  fontFamily: 'Segoe UI, sans-serif',
};

const headerStyle = {
  fontSize: '3rem',
  fontWeight: 'bold',
  animation: 'fadeBlueBlack 3s ease-in-out infinite',
  textAlign: 'center',
  marginBottom: '1.5rem',
};

const titleStyle = {
  fontSize: '2rem',
  marginBottom: '1rem',
  fontWeight: '600',
  textAlign: 'center',
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
  background: 'rgba(0, 0, 0, 0.6)',
  borderRadius: '10px',
  border: '1px solid #444',
  lineHeight: '1.6',
};

const footerStyle = {
  marginTop: '3rem',
  textAlign: 'center',
  color: '#ccc',
  fontSize: '0.9rem',
};
