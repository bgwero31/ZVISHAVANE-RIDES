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
      phoneCodeSent ? verifyPhoneOTP() : handleLogin();
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#fff',
    position: 'relative',
    padding: '2rem',
  };

  const floatingStyle = {
    maxWidth: '400px',
    width: '100%',
    marginTop: '6rem',
    color: '#fff',
    backdropFilter: 'blur(5px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: '#fff',
    outline: 'none',
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#00f2fe',
    color: '#000',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginTop: '0.5rem',
  };

  const socialButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#db4437',
    color: '#fff',
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
        <h1
          style={{
            fontSize: '3rem',
            color: '#00f2fe',
            animation: 'fadeIn 2s ease-in-out',
            marginTop: '5rem',
          }}
        >
          NEXRIDE
        </h1>
        <p
          style={{
            marginTop: '1rem',
            fontSize: '1.3rem',
            color: '#fff',
            textAlign: 'center',
            animation: 'fadeIn 3s ease-in-out',
          }}
        >
          Your Journey Begins Here
        </p>
        <style jsx>{`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
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
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={backgroundStyle}>
      <h1 style={{ fontSize: '3rem', marginTop: '2rem' }}>
        Welcome to <span style={{ color: '#00f2fe' }}>NEXRIDE</span>
      </h1>
      <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '400px', marginBottom: '2rem' }}>
        Fast, Smart, and Affordable Transport
      </p>

      <div style={floatingStyle}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!phoneCodeSent ? (
          <>
            <input
              type="text"
              placeholder="Email or Phone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              onKeyDown={handleKeyPress}
              style={inputStyle}
              autoComplete="username"
            />
            <input
              type="password"
              placeholder="Password"
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
              style={{ ...buttonStyle, backgroundColor: '#007acc' }}
              disabled={loading}
            >
              {loading ? 'Signing up...' : 'Sign Up'}
            </button>
            <button
              onClick={() => alert('Reset password coming soon!')}
              style={{ ...buttonStyle, backgroundColor: '#2c5364', color: '#fff' }}
            >
              Forgot Password?
            </button>
            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
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
                Continue with Phone
              </button>
            </div>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
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
