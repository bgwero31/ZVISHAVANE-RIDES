import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LoginPage() {
  const [stage, setStage] = useState('splash'); // splash -> spinner -> login
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setStage('spinner');
      const spinnerTimer = setTimeout(() => {
        setStage('login');
      }, 3000);
      return () => clearTimeout(spinnerTimer);
    }, 5000);

    return () => clearTimeout(splashTimer);
  }, []);

  const handleLogin = () => {
    if (emailOrPhone.trim() && password === 'shabhani') {
      router.push('/dashboard');
    } else {
      alert('Invalid email/phone or password');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleLogin();
  };

  if (stage === 'splash') {
    return (
      <div style={splashStyle}>
        <h1 style={{ fontSize: '3rem', color: '#00f2fe' }}>NEXRIDE</h1>
      </div>
    );
  }

  if (stage === 'spinner') {
    return (
      <div style={splashStyle}>
        <div className="loader" />
        <style jsx>{`
          .loader {
            border: 6px solid #f3f3f3;
            border-top: 6px solid #00f2fe;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={mainStyle}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Welcome to <span style={{ color: '#00f2fe' }}>NEXRIDE</span>
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center' }}>
        Fast, Smart, and Affordable Transport
      </p>

      <div style={loginBoxStyle}>
        <input
          type="text"
          placeholder="Enter Email or Phone Number"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          onKeyDown={handleKeyPress}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyPress}
          style={inputStyle}
        />
        <button onClick={handleLogin} style={buttonStyle}>
          Continue
        </button>

        <button
          onClick={() => alert('Reset password feature coming soon!')}
          style={{ ...buttonStyle, marginTop: '1rem', backgroundColor: '#2c5364', color: '#fff' }}
        >
          Forgot Password?
        </button>

        <button
          onClick={() => alert('Signup page coming soon!')}
          style={{ ...buttonStyle, marginTop: '1rem', backgroundColor: '#203a43', color: '#fff' }}
        >
          Sign Up
        </button>

        <Link href="/driver" style={{ textDecoration: 'none' }}>
          <button style={{ ...buttonStyle, marginTop: '1rem', backgroundColor: '#ffcc00' }}>
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

// Splash + Spinner style
const splashStyle = {
  backgroundColor: '#0f2027',
  color: '#00f2fe',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

// Main login styles
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
