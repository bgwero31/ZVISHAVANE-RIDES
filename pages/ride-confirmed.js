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
    // Simulate driver confirmation after 5 seconds
    const timer = setTimeout(() => {
      setIsConfirmed(true);

      // Placeholder data for driver – to be replaced with Firebase data
      setDriver({
        name: 'Driver Name',
        carType: 'Car Type',
        plateNumber: 'Plate Number',
        estimatedArrival: '4 minutes',
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Add keyframe animations
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
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Ride Confirmed!</h1>
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
    </div>
  );
}

// Styles
const containerStyle = {
  padding: '2rem',
  color: '#fff',
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #004e92, #000428)',
  fontFamily: 'Segoe UI, sans-serif',
};

const titleStyle = {
  fontSize: '2.5rem',
  marginBottom: '1rem',
  fontWeight: '600',
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
};
