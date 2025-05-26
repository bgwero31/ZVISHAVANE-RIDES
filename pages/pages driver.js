'use client';
import { useEffect, useState } from 'react';

export default function DriverView() {
  const [rideData, setRideData] = useState({
    name: '',
    pickup: '',
    dropoff: '',
    price: ''
  });

  useEffect(() => {
    const name = localStorage.getItem('customer_name') || 'No name';
    const pickup = localStorage.getItem('pickup_location') || 'No pickup location';
    const dropoff = localStorage.getItem('dropoff_location') || 'No dropoff location';
    const price = localStorage.getItem('offer_price') || 'No offer';

    setRideData({ name, pickup, dropoff, price });

    const message = `New ride request from ${name}. Pickup at ${pickup}, dropoff at ${dropoff}. Offered price is ${price} dollars.`;
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }, []);

  return (
    <div style={pageStyle}>
      <style>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      <h1 style={titleStyle}>Ride Request Info</h1>
      <div style={boxStyle}>
        <p><strong>Customer Name:</strong> {rideData.name}</p>
        <p><strong>Pickup Location:</strong> {rideData.pickup}</p>
        <p><strong>Dropoff Location:</strong> {rideData.dropoff}</p>
        <p><strong>Offer Price:</strong> {rideData.price}</p>
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #000428, #004e92)',
  backgroundSize: '400% 400%',
  animation: 'gradientMove 15s ease infinite',
  color: '#fff',
  padding: '2rem',
  fontFamily: 'Segoe UI, sans-serif',
};

const titleStyle = {
  fontSize: '2rem',
  marginBottom: '1.5rem',
};

const boxStyle = {
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '12px',
  padding: '1.5rem',
  maxWidth: '500px',
  border: '1px solid rgba(255, 255, 255, 0.2)'
};
