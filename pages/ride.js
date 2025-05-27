'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [offer, setOffer] = useState('');
  const [rideRequested, setRideRequested] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    let greeting = 'Welcome to NEXRIDE. Let’s get your ride moving.';

    if (hour < 12) greeting = 'Good morning. Welcome to nexride.';
    else if (hour < 17) greeting = 'Good afternoon. Welcome to nexride.';
    else greeting = 'Good evening. Welcome to nexride.';

    const utterance = new SpeechSynthesisUtterance(greeting + ' Where do you want to go?');
    utterance.lang = 'en-US';
    utterance.pitch = 1.2;
    utterance.rate = 1;
    utterance.volume = 1;
    speechSynthesis.speak(utterance);
  }, []);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  };

  const handleConfirm = () => {
    if (name && pickup && dropoff && offer) {
      const message = `${name}, your ride from ${pickup} to ${dropoff} has been booked for ${offer} dollars.`;
      speak(message);

      localStorage.setItem('customer_name', name);
      localStorage.setItem('pickup_location', pickup);
      localStorage.setItem('dropoff_location', dropoff);
      localStorage.setItem('offer_price', offer);

      window.location.href = '/ride-confirmed';
    } else {
      speak("Please enter your name, pickup, dropoff, and offer to book your ride.");
    }
  };

  return (
    <div
      style={{
        animation: 'fadeIn 2s ease-out',
        backgroundImage: 'url(/nexridebackground2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        padding: '2rem',
        fontFamily: 'Segoe UI, sans-serif',
        color: '#fff',
        position: 'relative',
      }}
    >
      {/* Clock */}
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          right: '2rem',
          fontSize: '1.2rem',
          color: '#fff',
          textShadow: '0 0 5px rgba(0,0,0,0.7)',
          fontWeight: '600',
          zIndex: 10,
        }}
      >
        <Clock />
      </div>

      {/* Main Section */}
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          background: 'rgba(0, 0, 0, 0.35)', // transparent black background
          borderRadius: '12px',
          padding: '2rem',
          textAlign: 'center',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          color: '#fff',
          zIndex: 5,
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: '900',
            background: 'linear-gradient(90deg, #004e92, #000000)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem',
          }}
        >
          NEXRIDE
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#c0c0c0' }}>
          Move around faster, cheaper and smarter.
        </p>

        {!rideRequested ? (
          <>
            <input
              type="text"
              placeholder="Your Name"
              style={inputStyle}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Pickup Location"
              style={inputStyle}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
            <input
              type="text"
              placeholder="Dropoff Location"
              style={inputStyle}
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
            />
            <input
              type="number"
              placeholder="Offer Price"
              style={inputStyle}
              value={offer}
              onChange={(e) => setOffer(e.target.value)}
            />
            <button onClick={handleConfirm} style={buttonStyle}>
              Request Ride
            </button>
          </>
        ) : (
          <p style={{ fontSize: '1.1rem', color: 'lightgreen' }}>
            Ride requested! Waiting for driver confirmation...
          </p>
        )}
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: '3rem',
          textAlign: 'center',
          padding: '1rem',
          color: '#ccc',
          fontSize: '0.9rem',
          position: 'absolute',
          bottom: '1rem',
          width: '100%',
          maxWidth: '400px',
          zIndex: 10,
        }}
      >
        &copy; {new Date().getFullYear()} Nexride. All rights reserved.
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

function Clock() {
  const now = new Date();
  return <>{now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</>;
}

const inputStyle = {
  width: '100%',
  padding: '0.8rem',
  marginBottom: '1rem',
  borderRadius: '8px',
  border: 'none',
  fontSize: '1rem',
};

const buttonStyle = {
  backgroundColor: '#fff',
  color: '#004e92',
  padding: '0.8rem',
  borderRadius: '8px',
  border: 'none',
  width: '100%',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: '1rem',
};
