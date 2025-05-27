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

  const render3DBackground = () => (
    <div className="nextRideBackground">
      <div className="movingLines" />
      <div className="grid" />
      <style jsx>{`
        .nextRideBackground {
          position: fixed;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, #101820 0%, #0c0c0c 100%);
          overflow: hidden;
          z-index: -1;
        }
        .movingLines {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
            to top,
            transparent 70%,
            rgba(0, 242, 254, 0.4) 85%,
            transparent 100%
          );
          background-size: 100% 40px;
          animation: moveLines 1.5s linear infinite;
          opacity: 0.6;
        }
        .grid {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: repeating-linear-gradient(
              to right,
              rgba(0, 242, 254, 0.1) 0,
              rgba(0, 242, 254, 0.1) 1px,
              transparent 1px,
              transparent 40px
            ),
            repeating-linear-gradient(
              to bottom,
              rgba(0, 242, 254, 0.1) 0,
              rgba(0, 242, 254, 0.1) 1px,
              transparent 1px,
              transparent 40px
            );
          animation: rotateGrid 100s linear infinite;
          opacity: 0.2;
        }
        @keyframes moveLines {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 100%;
          }
        }
        @keyframes rotateGrid {
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

  const splashStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: '#000',
    color: '#fff',
  };

  const mainStyle = {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
  };

  const loginBoxStyle = {
    width: '100%',
    maxWidth: '400px',
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
    backdropFilter: 'blur(10px)',
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
      <div style={splashStyle}>
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
    <div style={mainStyle}>
      {render3DBackground()}
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
              {loading ? 'Verifying...' : 'Verify OTP'}
            </button>
            <button
              onClick={() => {
                setPhoneCodeSent(false);
                setPhoneOTP('');
                setError('');
              }}
              style={{ ...buttonStyle, marginTop: '1rem', backgroundColor: '#ccc', color: '#000' }}
            >
              Back to Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}
