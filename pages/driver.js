'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function DriverRequestPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const pickup = searchParams.get('pickup');
  const dropoff = searchParams.get('dropoff');
  const offer = searchParams.get('offer');

  const [decision, setDecision] = useState(null); // null, 'accepted', or 'declined'

  const handleAccept = () => {
    setDecision('accepted');
    // TODO: Update Firebase when accepting
  };

  const handleDecline = () => {
    setDecision('declined');
    // TODO: Update Firebase when declining
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>New Ride Request</h1>
      <div style={requestBox}>
        <p style={infoText}><b>Rider:</b> {name}</p>
        <p style={infoText}><b>Pickup:</b> {pickup}</p>
        <p style={infoText}><b>Drop-off:</b> {dropoff}</p>
        <p style={infoText}><b>Offer:</b> ${offer}</p>

        {decision === null && (
          <div style={buttonRow}>
            <button onClick={handleDecline} style={declineButton}>Decline</button>
            <button onClick={handleAccept} style={acceptButton}>Accept</button>
          </div>
        )}

        {decision === 'accepted' && (
          <p style={confirmationText}>You have accepted the ride. Syncing with rider...</p>
        )}
        {decision === 'declined' && (
          <p style={{ color: 'red', fontSize: '0.85rem' }}>You have declined this ride.</p>
        )}
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  padding: '1rem',
  background: 'linear-gradient(135deg, #000428, #004e92)',
  minHeight: '100vh',
  color: '#fff',
  fontFamily: 'Segoe UI, sans-serif',
};

const titleStyle = {
  fontSize: '1.4rem',
  marginBottom: '1rem',
  fontWeight: '600',
  textAlign: 'center',
};

const requestBox = {
  border: '1px solid #ccc',
  borderRadius: '10px',
  padding: '1rem',
  background: '#002f6c',
};

const infoText = {
  fontSize: '0.9rem',
  margin: '0.3rem 0',
};

const buttonRow = {
  marginTop: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1rem',
};

const acceptButton = {
  flex: 1,
  padding: '0.6rem 1rem',
  fontSize: '0.85rem',
  borderRadius: '6px',
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
};

const declineButton = {
  flex: 1,
  padding: '0.6rem 1rem',
  fontSize: '0.85rem',
  borderRadius: '6px',
  backgroundColor: '#dc3545',
  color: '#fff',
  border: 'none',
};

const confirmationText = {
  marginTop: '1rem',
  fontSize: '0.95rem',
  fontWeight: 'bold',
  color: '#00c851',
};
