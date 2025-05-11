import React, { useEffect, useState } from 'react';

export default function DriverPage() {
  const [rideInfo, setRideInfo] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const name = localStorage.getItem('customer_name');
      const pickup = localStorage.getItem('pickup_location');
      const dropoff = localStorage.getItem('dropoff_location');
      const price = localStorage.getItem('offer_price');

      if (name || pickup || dropoff || price) {
        const info = {
          name: name || 'Unknown',
          pickup: pickup || 'Not set',
          dropoff: dropoff || 'Not set',
          price: price || 'Not set',
        };
        setRideInfo(info);

        const msg = `New ride request from ${info.name}. Pickup at ${info.pickup}, dropoff at ${info.dropoff}. Offer is ${info.price} dollars.`;
        if ('speechSynthesis' in window) {
          const utter = new SpeechSynthesisUtterance(msg);
          utter.lang = 'en-US';
          window.speechSynthesis.speak(utter);
        }
      }
    }
  }, []);

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Driver Ride Dashboard</h1>
      {rideInfo ? (
        <div style={infoBox}>
          <p><strong>Name:</strong> {rideInfo.name}</p>
          <p><strong>Pickup:</strong> {rideInfo.pickup}</p>
          <p><strong>Dropoff:</strong> {rideInfo.dropoff}</p>
          <p><strong>Price:</strong> ${rideInfo.price}</p>
        </div>
      ) : (
        <p>No ride info received yet.</p>
      )}
    </div>
  );
}

const containerStyle = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #004e92, #000428)',
  color: '#fff',
  padding: '2rem',
  fontFamily: 'Segoe UI, sans-serif',
};

const infoBox = {
  background: 'rgba(255, 255, 255, 0.08)',
  padding: '1.5rem',
  borderRadius: '10px',
  maxWidth: '400px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
};
