import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LoginPage() {
const [emailOrPhone, setEmailOrPhone] = useState('');
const [password, setPassword] = useState('');
const router = useRouter();

const correctPassword = 'shabhani';

const handleLogin = () => {
if ((emailOrPhone) && password === correctPassword) {
router.push('/dashboard'); // Changed from /ride to /dashboard
} else {
alert('Please check your email/phone and password');
}
};

return (
<div style={{
background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
minHeight: '100vh',
display: 'flex',
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
color: '#fff',
fontFamily: 'Segoe UI, sans-serif',
padding: '2rem',
}}>
<h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
Welcome to <span style={{ color: '#00f2fe' }}>NEXRIDE</span>
</h1>
<p style={{ fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center' }}>
Fast, Smart, and Affordable Transport
</p>

<div style={{  
    backgroundColor: '#ffffff25',  
    padding: '2rem',  
    borderRadius: '12px',  
    width: '100%',  
    maxWidth: '400px',  
    backdropFilter: 'blur(10px)',  
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',  
    animation: 'glowEffect 1.5s ease-in-out infinite',  
  }}>  
    <input  
      type="text"  
      placeholder="Enter Email or Phone Number"  
      value={emailOrPhone}  
      onChange={(e) => setEmailOrPhone(e.target.value)}  
      style={inputStyle}  
    />  
    <input  
      type="password"  
      placeholder="Enter Password"  
      value={password}  
      onChange={(e) => setPassword(e.target.value)}  
      style={inputStyle}  
    />  
    <button onClick={handleLogin} style={buttonStyle}>  
      Continue  
    </button>  

    <Link href="/driver" style={{ textDecoration: 'none' }}>  
      <button style={{ ...buttonStyle, marginTop: '1rem', backgroundColor: '#ffcc00' }}>  
        Driver Page  
      </button>  
    </Link>  
  </div>  

  <footer style={{  
    marginTop: '3rem',  
    fontSize: '0.9rem',  
    color: '#ccc'  
  }}>  
    &copy; {new Date().getFullYear()} NexRide| All rights reserved  
  </footer>  
</div>

);
}

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
