// pages/signup.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Signup() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [stage, setStage] = useState('signup'); // 'signup' -> 'verify'
  const router = useRouter();

  const sendOTP = () => {
    const generatedOtp = Math.floor(100000 + Math.random() * 900000); // 6 digit
    localStorage.setItem('otp', generatedOtp);
    alert(`Your OTP is: ${generatedOtp}`);
    setStage('verify');
  };

  const verifyOTP = () => {
    const realOtp = localStorage.getItem('otp');
    if (otp === realOtp) {
      alert('Phone verified!');
      router.push('/dashboard');
    } else {
      alert('Incorrect OTP');
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Sign Up</h2>
      {stage === 'signup' ? (
        <>
          <input
            type="tel"
            placeholder="Enter phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ margin: '1rem', padding: '0.5rem' }}
          />
          <br />
          <button onClick={sendOTP}>Send OTP</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={{ margin: '1rem', padding: '0.5rem' }}
          />
          <br />
          <button onClick={verifyOTP}>Verify OTP</button>
        </>
      )}
    </div>
  );
}
