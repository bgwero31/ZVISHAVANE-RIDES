import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// TODO: Replace with your own Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  // ...other config
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function LoginPage() {
  const [stage, setStage] = useState('splash'); // splash -> spinner -> login
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [phoneCodeSent, setPhoneCodeSent] = useState(false);
  const [phoneVerificationId, setPhoneVerificationId] = useState(null);
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

  // Email/Password login
  const handleLogin = async () => {
    setError('');
    if (!emailOrPhone.trim() || !password) {
      setError('Please enter email/phone and password');
      return;
    }
    setLoading(true);
    try {
      // Try email login
      await signInWithEmailAndPassword(auth, emailOrPhone, password);
      router.push('/dashboard');
    } catch (e) {
      setError('Login failed: ' + e.message);
    }
    setLoading(false);
  };

  // Email/Password signup
  const handleSignup = async () => {
    setError('');
    if (!emailOrPhone.trim() || !password) {
      setError('Please enter email/phone and password');
      return;
    }
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, emailOrPhone, password);
      router.push('/dashboard');
    } catch (e) {
      setError('Signup failed: ' + e.message);
    }
    setLoading(false);
  };

  // Google Login
  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push('/dashboard');
    } catch (e) {
      setError('Google login failed: ' + e.message);
    }
    setLoading(false);
  };

  // Facebook Login
  const handleFacebookLogin = async () => {
    setError('');
    setLoading(true);
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push('/dashboard');
    } catch (e) {
      setError('Facebook login failed: ' + e.message);
    }
    setLoading(false);
  };

  // Phone auth setup
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'invisible',
          callback: () => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
          }
        },
        auth
      );
    }
  };

  // Send OTP for phone
  const sendPhoneOTP = async () => {
    setError('');
    if (!emailOrPhone.trim()) {
      setError('Enter phone number with country code (e.g. +254...)');
      return;
    }
    setLoading(true);
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    try {
      const confirmationResult = await signInWithPhoneNumber(auth, emailOrPhone, appVerifier);
      setPhoneVerificationId(confirmationResult);
      setPhoneCodeSent(true);
    } catch (e) {
      setError('Failed to send OTP: ' + e.message);
    }
    setLoading(false);
  };

  // Verify OTP and login
  const verifyPhoneOTP = async () => {
    setError('');
    if (!phoneOTP.trim()) {
      setError('Enter the OTP code sent to your phone');
      return;
    }
    setLoading(true);
    try {
      await phoneVerificationId.confirm(phoneOTP);
      router.push('/dashboard');
    } catch (e) {
      setError('OTP verification failed: ' + e.message);
    }
    setLoading(false);
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
        Welcome to <span style={{ color: '#00f2fe' }}>NEXT hih</span>
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
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyPress}
              style={inputStyle}
            />

            <button onClick={handleLogin} style={buttonStyle} disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>

            <button onClick={handleSignup} style={{ ...buttonStyle, marginTop: '1rem', backgroundColor: '#007acc' }} disabled={loading}>
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
              <button onClick={handleFacebookLogin} style={{ ...socialButtonStyle, backgroundColor: '#3b5998' }} disabled={loading}>
                Continue with Facebook
              </button>
              <button onClick={sendPhoneOTP} style={{ ...socialButtonStyle, backgroundColor: '#25D366' }} disabled={loading}>
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

        <div id="recaptcha-container"></div>

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

// Styles (same color theme)
const splashStyle = {
  backgroundColor: '#0f2027',
  color: '#00f2fe',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

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

const socialButtonStyle = {
  backgroundColor: '#4285f4',
  color: '#fff',
  padding: '0.8rem',
  borderRadius: '8px',
  border: 'none',
  width: '100%',
  fontWeight: 'bold',
  fontSize: '1rem',
  cursor: 'pointer',
  marginBottom: '0.5rem',
};

const footerStyle = {
  marginTop: '3rem',
  fontSize: '0.9rem',
  color: '#ccc',
};

