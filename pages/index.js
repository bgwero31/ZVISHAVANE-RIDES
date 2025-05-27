import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [stage, setStage] = useState('splash');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [phoneCodeSent, setPhoneCodeSent] = useState(false);
  const [phoneOTP, setPhoneOTP] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
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

  const handleLogin = async () => {
    setError('');
    if (!emailOrPhone.trim() || !password) {
      setError('Please enter email/phone and password');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 1000);
  };

  const handleSignup = async () => {
    setError('');
    if (!emailOrPhone.trim() || !password) {
      setError('Please enter email/phone and password');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 1000);
  };

  const handleGoogleLogin = () => alert('Google login coming soon!');
  const handleFacebookLogin = () => alert('Facebook login coming soon!');
  const sendPhoneOTP = () => setPhoneCodeSent(true);
  const verifyPhoneOTP = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (phoneCodeSent) {
        verifyPhoneOTP();
      } else {
        handleLogin();
      }
    }
  };

  const getBackgroundImage = () => {
    if (stage === 'splash') return 'url("/nexridebackground.png")';
    return 'url("/nexridebackground4.jpg")';
  };

  const backgroundStyle = {
    width: '100%',
    height: '100vh',
    backgroundImage: getBackgroundImage(),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    position: 'relative',
    zIndex: 1,
    padding: '2rem',
    transition: 'background-image 1s ease-in-out',
  };

  const loginBoxStyle = {
    width: '100%',
    maxWidth: '400px',
    padding: '2rem',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#00f2fe',
    color: '#000',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  const socialButtonStyle = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#db4437',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '0.5rem',
  };

  const footerStyle = {
    position: 'absolute',
    bottom: '1rem',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#ffffff',
    width: '100%',
    opacity: 0.8,
  };

  if (stage === 'splash') {
    return (
      <div style={backgroundStyle}>
        <h1 style={{ fontSize: '3rem', color: '#00f2fe', animation: 'fadeIn 2s ease' }}>NEXRIDE</h1>
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  if (stage === 'spinner') {
    return (
      <div style={backgroundStyle}>
        <div className="spinner" />
        <style jsx>{`
          .spinner {
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
    <div style={backgroundStyle}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Welcome to <span style={{ color: '#00f2fe' }}>NEXRIDE</span>
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center' }}>
        Fast, Smart, and Affordable Transport
      </p>

      <div style={loginBoxStyle}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!phoneCodeSent ? (
          <>
            <input
              type="text"
              placeholder="Enter Email or Phone Number"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              onKeyDown={handleKeyPress}
              style={inputStyle}
              autoComplete="username"
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyPress}
              style={inputStyle}
              autoComplete="current-password"
            />
            <button onClick={handleLogin} style={buttonStyle} disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <button
              onClick={handleSignup}
              style={{ ...buttonStyle, marginTop: '1rem', backgroundColor: '#007acc' }}
              disabled={loading}
            >
              {loading ? 'Signing up...' : 'Sign Up'}
            </button>
            <button
              onClick={() => alert('Reset password feature coming soon!')}
              style={{ ...buttonStyle, marginTop: '1rem', backgroundColor: '#2c5364', color: '#fff' }}
            >
              Forgot Password?
            </button>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <div style={{ marginBottom: '0.5rem' }}>Or login with:</div>
              <button onClick={handleGoogleLogin} style={socialButtonStyle}>
                Continue with Google
              </button>
              <button
                onClick={handleFacebookLogin}
                style={{ ...socialButtonStyle, backgroundColor: '#3b5998' }}
              >
                Continue with Facebook
              </button>
              <button
                onClick={sendPhoneOTP}
                style={{ ...socialButtonStyle, backgroundColor: '#25D366' }}
              >
                Continue with Phone (SMS)
              </button>
            </div>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP code"
              value={phoneOTP}
              onChange={(e) => setPhoneOTP(e.target.value)}
              onKeyDown={handleKeyPress}
              style={inputStyle}
            />
            <button onClick={verifyPhoneOTP} style={buttonStyle} disabled={loading}>
              {loading ? 'Verifying...' : 'Verify'}
            </button>
          </>
        )}
      </div>

      <footer style={footerStyle}>
        &copy; {new Date().getFullYear()} NEXRIDE. All rights reserved.
      </footer>
    </div>
  );
}
