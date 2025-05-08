import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [currentTime, setCurrentTime] = useState('');

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      setCurrentTime(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      backgroundImage: 'url("/bg-cars.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '2rem',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top Section */}
      <div style={{
        zIndex: 10,
      }}>
        {/* Clock on the top right */}
        <div style={{
          position: 'absolute',
          top: '2rem',
          right: '2rem',
          fontSize: '1.4rem',
          fontWeight: 'bold',
          color: '#00f2fe',
          textShadow: '0px 0px 10px rgba(0, 242, 254, 0.7)',
        }}>
          {currentTime}
        </div>

        <h1 style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          textShadow: '0px 0px 15px rgba(0, 242, 254, 0.8)',
        }}>
          Welcome to <span style={{ color: '#00f2fe' }}>Zvishavane Rides</span>
        </h1>
        <p style={{
          fontSize: '1.5rem',
          marginBottom: '2rem',
          textShadow: '0px 0px 15px rgba(0, 242, 254, 0.5)',
        }}>
          Where do you want to go?
        </p>

        {/* AI-like welcome message */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.6)',
          padding: '1rem',
          borderRadius: '12px',
          maxWidth: '450px',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 10px 30px rgba(0, 242, 254, 0.6)',
          marginBottom: '2rem',
        }}>
          <p style={{ fontSize: '1.2rem', color: '#fff', textAlign: 'center' }}>
            <span style={{ color: '#00f2fe' }}>AI:</span> Let's get your ride moving!
          </p>
        </div>

        {/* Ride Request Form */}
        <div style={{
          background: '#ffffff20',
          padding: '2rem',
          borderRadius: '12px',
          maxWidth: '400px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 15px 35px rgba(0, 242, 254, 0.5)',
          animation: 'glowEffect 2s ease-in-out infinite',
        }}>
          <input
            type="text"
            placeholder="Pickup Location"
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Dropoff Location"
            style={inputStyle}
          />
          <input
            type="number"
            placeholder="Offer Price"
            style={inputStyle}
          />
          <button style={buttonStyle}>
            Request Ride
          </button>
        </div>

        {/* Navigation */}
        <div style={{ marginTop: '2rem' }}>
          <Link href="/login">
            <button style={{ ...navButtonStyle }}>Login</button>
          </Link>
          <Link href="/signup">
            <button style={{ ...navButtonStyle, marginLeft: '1rem' }}>Sign Up</button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        marginTop: '3rem',
        textAlign: 'center',
        padding: '1rem',
        color: '#ccc',
        fontSize: '0.9rem',
      }}>
        &copy; {new Date().getFullYear()} Zvishavane Rides. All rights reserved.
      </footer>
    </div>
  );
}

// Styling for inputs and buttons
const inputStyle = {
  width: '100%',
  padding: '0.8rem',
  marginBottom: '1rem',
  borderRadius: '8px',
  border: 'none',
  fontSize: '1rem',
};

const buttonStyle = {
  backgroundColor: '#00f2fe',
  color: '#000',
  padding: '0.8rem',
  borderRadius: '8px',
  border: 'none',
  width: '100%',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: '1rem',
};

const navButtonStyle = {
  backgroundColor: '#ff7e5f',
  color: '#fff',
  padding: '0.6rem 1.2rem',
  border: 'none',
  borderRadius: '6px',
  fontSize: '1rem',
  cursor: 'pointer',
};

// Glow effect CSS (for futuristic effect)
const glowEffect = `
@keyframes glowEffect {
  0% {
    box-shadow: 0 0 20px rgba(0, 242, 254, 0.5);
  }
  50% {
    box-shadow: 0 0 40px rgba(0, 242, 254, 0.7);
  }
  100% {
    box-shadow: 0 0 20px rgba(0, 242, 254, 0.5);
  }
}
`;
