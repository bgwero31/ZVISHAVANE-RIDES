import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
  const sendPhoneOTP = () => alert('Phone login coming soon!');
  const verifyPhoneOTP = () => alert('OTP verification coming soon!');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (phoneCodeSent) {
        verifyPhoneOTP();
      } else {
        handleLogin();
      }
    }
  };

  const render3DBackground = () => (
    <div className="background3D">
      <style jsx>{`
        .background3D {
          position: fixed;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1f1c2c, #928dab);
          overflow: hidden;
          z-index: -1;
        }
        .background3D::before {
          content: '';
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: repeating-radial-gradient(circle, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 100px);
          animation: rotateBackground 100s linear infinite;
        }
        @keyframes rotateBackground {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </div>
  );

  if (stage === 'splash') {
    return (
      <div style={splashStyle}>
        {render3DBackground()}
        <h1 style={{ fontSize: '3rem', color: '#00f2fe' }}>NEXRIDE</h1>
      </div>
    );
  }

  if (stage === 'spinner') {
    return (
      <div style={{ ...splashStyle, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {render3DBackground()}
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
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={mainStyle}>
      {render3DBackground()}
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Welcome to <span style={{ color: '#00f2fe' }}>NEXRIDE</span>
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center' }}>
        Fast, Smart, and Affordable Transport
      </p>

      <div style={loginBoxStyle}>
        {!phoneCodeSent ? (
          <>
            <input
              type="text"
              placeholder="Enter Email or Phone Number (+countrycode)"
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
              <button onClick={handleGoogleLogin} style={socialButtonStyle} disabled={loading}>
                Continue with Google
              </button>
              <button
                onClick={handleFacebookLogin}
                style={{ ...socialButtonStyle, backgroundColor: '#3b5998' }}
                disabled={loading}
              >
                Continue with Facebook
              </button>
              <button
                onClick={sendPhoneOTP}
                style={{ ...socialButtonStyle, backgroundColor: '#25D366' }}
                disabled={loading}
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
              {loading ? 'Verifying...' : 'Verify OTP'}
            </button>
            <button
              onClick={() => {
                setPhoneCodeSent(false);
                setPhoneOTP('');
                setError('');
              }}
              style={{ ...buttonStyle, marginTop: '1rem', backgroundColor: '#ccc', color: '#000' }}
              disabled={loading}
            >
              Back
            </button>
          </>
        )}
        {error && <p style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>{error}</p>}
        <Link href="/driver" passHref>
          <button style={{ ...buttonStyle, marginTop: '1rem', backgroundColor: '#ffcc00' }}>
            Driver Page
          </button>
        </Link>
      </div>

      <footer style={footerStyle}>&copy; {new Date().getFullYear()} NexRide | All rights reserved</footer>
    </div>
  );
}

// Styles
const splashStyle = {
  textAlign: 'center',
  paddingTop: '40vh',
  color: '#fff',
  height: '100vh',
  position: 'relative',
  zIndex: 1,
};

const mainStyle = {
  padding: '2rem',
  fontFamily: 'Arial, sans-serif',
  minHeight: '100vh',
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
};

const loginBoxStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  padding: '2rem',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0,0,0,0.2)',
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  marginBottom: '1rem',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  width: '100%',
  padding: '0.75rem',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#00f2fe',
  color: '#000',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const socialButtonStyle = {
  ...buttonStyle,
  marginTop: '1rem',
  backgroundColor: '#4285F4',
  color: '#fff',
};

const footerStyle = {
  marginTop: '2rem',
  color: '#eee',
};
