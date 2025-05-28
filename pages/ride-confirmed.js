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
  const [driver, setDriver] = useState(null);

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

  return (
    <div style={containerStyle}>
      <h1 style={logoStyle}>
        {'NEXRIDE'.split('').map((char, index) => (
          <span key={index} className="fade-letter">{char}</span>
        ))}
      </h1>

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

      <footer style={footerStyle}>NexRide © 2025</footer>
    </div>
  );
}

// ========== Styles ==========

const containerStyle = {
  padding: '2rem',
  color: '#fff',
  minHeight: '40vh',
  backgroundImage: 'url("/nexridebackground7.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  fontFamily: 'Segoe UI, sans-serif',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const logoStyle = {
  fontSize: '3.2rem',
  fontWeight: 'bold',
  marginBottom: '1.5rem',
  letterSpacing: '0.1em',
};

const titleStyle = {
  fontSize: '2rem',
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
  width: '100%',
  maxWidth: '400px',
};

const footerStyle = {
  marginTop: '4rem',
  fontSize: '0.9rem',
  color: '#aaa',
  textAlign: 'center',
};
