import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Signup() {
  const [stage, setStage] = useState('signup');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const router = useRouter();

  const sendOTP = () => {
    if (!fullName || !phone || !password) {
      alert('Please fill all fields.');
      return;
    }

    const generatedOtp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
    localStorage.setItem('otp', generatedOtp);
    alert(`Your OTP is: ${generatedOtp}`);
    setStage('verify');
  };

  const verifyOTP = () => {
    const realOtp = localStorage.getItem('otp');
    if (otp === realOtp) {
      alert('Phone verified and account created!');
      router.push('/dashboard');
    } else {
      alert('Incorrect OTP');
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url(/nexridebackground9.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: '#222',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <div style={{
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '2rem',
        borderRadius: '1rem',
        maxWidth: '400px',
        width: '100%',
        boxShadow: '0 0 15px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '1.5rem', color: '#111' }}>Create Your Account</h2>

        {stage === 'signup' ? (
          <>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={inputStyle}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={inputStyle}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
            <button onClick={sendOTP} style={buttonStyle}>Send OTP</button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={inputStyle}
            />
            <button onClick={verifyOTP} style={buttonStyle}>Verify OTP</button>
          </>
        )}
      </div>

      <footer style={{ marginTop: '2rem', color: '#fff', fontWeight: 'bold' }}>
        NEXRIDE
      </footer>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  marginBottom: '1rem',
  borderRadius: '0.5rem',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

const buttonStyle = {
  width: '100%',
  padding: '0.75rem',
  backgroundColor: '#0070f3',
  color: '#fff',
  border: 'none',
  borderRadius: '0.5rem',
  fontSize: '1rem',
  cursor: 'pointer',
};
