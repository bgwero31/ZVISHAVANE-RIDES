//ride-confirmed/page.js
'use client';

import { useSearchParams } from 'next/navigation';

export default function RideConfirmed() {
  const searchParams = useSearchParams();
  const pickup = searchParams.get('pickup');
  const dropoff = searchParams.get('dropoff');
  const offer = searchParams.get('offer');

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Ride Confirmed!</h1>
      <p>Your ride from <strong>{pickup}</strong> to <strong>{dropoff}</strong> has been booked.</p>
      <p>Offer: <strong>${offer}</strong></p>
      <p style={{ marginTop: '1.5rem' }}>Please wait for a driver to accept your offer.</p>
    </div>
  );
}

const containerStyle = {
  padding: '2rem',
  color: '#fff',
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #004e92, #000428)',
  fontFamily: 'Segoe UI, sans-serif',
};

const titleStyle = {
  fontSize: '2rem',
  marginBottom: '1rem'
};
