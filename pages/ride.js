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
    let greeting = 'Welcome to ZVISHAVANE RIDES. Let’s get your ride moving.';

    if (hour < 12) greeting = 'Good morning. Welcome to Zvish Rides.';
    else if (hour < 17) greeting = 'Good afternoon. Welcome to Zvish Rides.';
    else greeting = 'Good evening. Welcome to Zvish Rides.';

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

      // Save to localStorage
      localStorage.setItem('customer_name', name);
      localStorage.setItem('pickup_location', pickup);
      localStorage.setItem('dropoff_location', dropoff);
      localStorage.setItem('offer_price', offer);

      // Redirect to confirmation page
      window.location.href = '/ride-confirmed';
    } else {
      speak("Please enter your name, pickup, dropoff, and offer to book your ride.");
    }
  };

  return (
    <div style={{
      animation: 'fadeIn 2s ease-out',
      background: 'linear-gradient(135deg, #004e92, #000428)',
      backgroundSize: '400% 400%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '2rem',
      color: '#fff',
      fontFamily: 'Segoe UI, sans-serif',
      animationName: 'gradientFlow',
      animationDuration: '15s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
    }}>
      {/* Clock */}
      <div style={{ position: 'absolute', top: '1rem', right: '2rem', fontSize: '1rem', color: '#ddd' }}>
        <Clock />
      </div>

      {/* Main Section */}
      <div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Zvishavane Rides
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Move around Zvishavane faster, cheaper and smarter.
        </p>

        <div style={{
          padding: '1.5rem',
          borderRadius: '12px',
          maxWidth: '400px',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
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
              <button
                onClick={handleConfirm}
                style={buttonStyle}
              >
                Confirm Ride
              </button>
            </>
          ) : (
            <p style={{ fontSize: '1.1rem', color: 'lightgreen' }}>
              Ride requested! Waiting for driver confirmation...
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        marginTop: '3rem',
        textAlign: 'center',
        padding: '1rem',
        color: '#ccc',
        fontSize: '0.9rem'
      }}>
        &copy; {new Date().getFullYear()} Zvishavane Rides. All rights reserved.
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
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
  fontSize: '1rem'
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
  marginTop: '1rem'
};
