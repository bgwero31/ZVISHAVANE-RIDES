import React, { useState, useEffect } from 'react';

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogin(true);
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  // Splash Screen Style
  const splashStyle = {
    height: '100vh',
    backgroundImage: 'url("/nexridebackground.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#fff',
  };

  // Login Container Style
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url("/nexridebackground2.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '0 1rem',
    position: 'relative',
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    background: 'linear-gradient(to right, #00c6ff, #0072ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',
  };

  const loginBoxStyle = {
    width: '100%',
    maxWidth: '400px',
    padding: '2rem',
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    color: '#fff',
    zIndex: 2,
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: '#fff',
    outline: 'none',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#0072ff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '15px',
    fontWeight: 'bold',
  };

  const footerStyle = {
    position: 'absolute',
    bottom: '20px',
    color: '#ccc',
    fontSize: '14px',
    textAlign: 'center',
  };

  return (
    <>
      {!showLogin ? (
        <div style={splashStyle}>
          NEXRIDE
        </div>
      ) : (
        <div style={containerStyle}>
          <h1 style={titleStyle}>NEXRIDE</h1>
          <div style={loginBoxStyle}>
            <input type="email" placeholder="Email" style={inputStyle} />
            <input type="password" placeholder="Password" style={inputStyle} />
            <button style={buttonStyle}>Log In</button>
          </div>
          <div style={footerStyle}>
            © NEXRIDE 2025. All rights reserved.
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
