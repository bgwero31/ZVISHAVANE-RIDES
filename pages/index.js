import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Hardcoded password for validation
  const correctPassword = 'shabhani';

  const handleLogin = () => {
    if ((emailOrPhone) && password === correctPassword) {
      router.push('/ride');
    } else {
      alert('Please check your email/phone and password');
    }
  };

  return (
    <div style={{
      background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      fontFamily: 'Segoe UI, sans-serif',
      padding: '2rem',
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Welcome to <span style={{ color: '#00f2fe' }}>ZVISHAVANE RIDES</span>
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center' }}>
        Fast, Smart, and Affordable Transport in Zvishavane
      </p>

      <div style={{
        backgroundColor: '#ffffff25', // Slight glowing blue effect
        padding: '2rem',
        borderRadius: '12px',
        width: '100%',
        maxWidth: '400px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
        animation: 'glowEffect 1.5s ease-in-out infinite', // Glowing animation
      }}>
        <input
          type="text"
          placeholder="Enter Email or Phone Number"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleLogin} style={buttonStyle}>
          Continue
        </button>
      </div>

      <footer style={{
        marginTop: '3rem',
        fontSize: '0.9rem',
        color: '#ccc'
      }}>
        &copy; {new Date().getFullYear()} Zvishavane Rides| All rights reserved
      </footer>
    </div>
  );
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
  backgroundColor: '#00f2fe',
  color: '#000',
  padding: '0.8rem',
  borderRadius: '8px',
  border: 'none',
  width: '100%',
  fontWeight: 'bold',
  fontSize: '1rem',
  cursor: 'pointer',
};

// Glowing effect CSS (added in the global styles or inline in the component)
const glowEffect = `
@keyframes glowEffect {
  0% {
    box-shadow: 0 0 10px rgba(0, 242, 254, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 242, 254, 0.7);
  }
  100% {
    box-shadow: 0 0 10px rgba(0, 242, 254, 0.5);
  }
}
`;
