'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

export default function DriverRequestPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const pickup = searchParams.get('pickup');
  const dropoff = searchParams.get('dropoff');
  const offer = searchParams.get('offer');

  const [decision, setDecision] = useState(null);

  // Ref for animation frame
  const animationRef = useRef(null);
  const containerRef = useRef(null);

  // Animate background gradient like a 3D flowing effect
  useEffect(() => {
    let gradientPosition = 0;

    function animate() {
      gradientPosition += 1;
      if (gradientPosition > 360) gradientPosition = 0;

      if (containerRef.current) {
        containerRef.current.style.background = `linear-gradient(${gradientPosition}deg, #000428, #004e92)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const handleAccept = () => {
    setDecision('accepted');
    // TODO: Update Firebase
  };

  const handleDecline = () => {
    setDecision('declined');
    // TODO: Update Firebase
  };

  return React.createElement('div', { ref: containerRef, style: containerStyle },
    React.createElement('h1', { style: titleStyle }, 'New Ride Request'),
    React.createElement('div', { style: requestBox },
      React.createElement('p', { style: infoText }, React.createElement('b', null, 'Rider:'), ' ', name),
      React.createElement('p', { style: infoText }, React.createElement('b', null, 'Pickup:'), ' ', pickup),
      React.createElement('p', { style: infoText }, React.createElement('b', null, 'Drop-off:'), ' ', dropoff),
      React.createElement('p', { style: infoText }, React.createElement('b', null, 'Offer:'), ' $', offer),

      decision === null &&
      React.createElement('div', { style: buttonRow },
        React.createElement('button', { onClick: handleDecline, style: declineButton }, 'Decline'),
        React.createElement('button', { onClick: handleAccept, style: acceptButton }, 'Accept'),
      ),

      decision === 'accepted' &&
      React.createElement('p', { style: confirmationText }, 'You have accepted the ride. Syncing with rider...'),

      decision === 'declined' &&
      React.createElement('p', { style: { color: 'red', fontSize: '0.85rem' } }, 'You have declined this ride.')
    )
  );
}

// Styles
const containerStyle = {
  padding: '1rem',
  minHeight: '100vh',
  color: '#fff',
  fontFamily: 'Segoe UI, sans-serif',
  background: 'linear-gradient(135deg, #000428, #004e92)', // fallback, animated will override
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
  cursor: 'pointer',
};

const declineButton = {
  flex: 1,
  padding: '0.6rem 1rem',
  fontSize: '0.85rem',
  borderRadius: '6px',
  backgroundColor: '#dc3545',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};

const confirmationText = {
  marginTop: '1rem',
  fontSize: '0.95rem',
  fontWeight: 'bold',
  color: '#00c851',
};
