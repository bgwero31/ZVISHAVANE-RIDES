import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LoginPage() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const correctPassword = 'shabhani';

  const handleLogin = () => {
    setError('');
    if (!emailOrPhone) {
      setError('Please enter your email or phone number.');
      return;
    }
    if (!password) {
      setError('Please enter your password.');
      return;
    }

    setLoading(true);

    // Simulate async login delay
    setTimeout(() => {
      setLoading(false);
      if (password === correctPassword) {
        router.push('/dashboard');
      } else {
        setError('Incorrect password. Please try again.');
      }
    }, 1000);
  };

  return (
    <div style={mainStyle}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textShadow: '2px 2px 4px #000' }}>
        Welcome to <span style={{ color: '#00f2fe' }}>NexRide</span>
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center', textShadow: '1px 1px 2px #000' }}>
        Fast, Smart, and Affordable Transport in Zvishavane
      </p>

      <div style={loginBoxStyle}>
        <input
          type="text"
          placeholder="Enter Email or Phone Number"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          style={inputStyle}
          disabled={loading}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          disabled={loading}
        />
        <button onClick={handleLogin} style={buttonStyle} disabled={loading}>
          {loading ? 'Logging in...' : 'Continue'}
        </button>

        {error && (
          <p style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>
            {error}
          </p>
        )}

        <Link href="/driver" passHref>
          <button
            style={{ ...buttonStyle, marginTop: '1rem', backgroundColor: '#ffcc00', color: '#000' }}
            disabled={loading}
          >
            Driver Page
          </button>
        </Link>
      </div>

      <footer style={footerStyle}>
        &copy; {new Date().getFullYear()} NexRide | All rights reserved
      </footer>
    </div>
  );
}

const mainStyle = {
  background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  fontFamily: 'Segoe UI, sans-serif',
  padding: '2rem',
};

const loginBoxStyle = {
  backgroundColor: '#ffffff25',
  padding: '2rem',
  borderRadius: '12px',
  width: '100%',
  maxWidth: '400px',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
};

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

const footerStyle = {
  marginTop: '3rem',
  fontSize: '0.9rem',
  color: '#ccc',
};
