import { useState, useEffect } from 'react'; import { useRouter } from 'next/router';

export default function LoginPage() { const [stage, setStage] = useState('splash'); const [emailOrPhone, setEmailOrPhone] = useState(''); const [password, setPassword] = useState(''); const [phoneCodeSent, setPhoneCodeSent] = useState(false); const [phoneOTP, setPhoneOTP] = useState(''); const [loading, setLoading] = useState(false); const [error, setError] = useState(''); const router = useRouter();

useEffect(() => { const splashTimer = setTimeout(() => { setStage('spinner'); const spinnerTimer = setTimeout(() => { setStage('login'); }, 3000); return () => clearTimeout(spinnerTimer); }, 5000); return () => clearTimeout(splashTimer); }, []);

const handleLogin = () => { if (!emailOrPhone.trim() || !password) { setError('Please enter email/phone and password'); return; } setLoading(true); setTimeout(() => { setLoading(false); router.push('/dashboard'); }, 1000); };

const sendPhoneOTP = () => setPhoneCodeSent(true); const verifyPhoneOTP = () => { setLoading(true); setTimeout(() => { setLoading(false); router.push('/dashboard'); }, 1000); };

const getBackgroundImage = () => { if (stage === 'splash') return 'url("/nexridebackground.png")'; return 'url("/nexridebackground4.jpg")'; };

const handleKeyPress = (e) => { if (e.key === 'Enter') { phoneCodeSent ? verifyPhoneOTP() : handleLogin(); } };

const backgroundStyle = { width: '100%', height: '100vh', backgroundImage: getBackgroundImage(), backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', padding: '2rem', overflow: 'hidden', };

const floatingStyle = { width: '100%', maxWidth: '340px', marginTop: '2rem', color: '#fff', backdropFilter: 'blur(5px)', display: 'flex', flexDirection: 'column', alignItems: 'center', };

const inputStyle = { width: '100%', padding: '0.5rem', marginBottom: '0.7rem', borderRadius: '4px', border: 'none', backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '1rem', outline: 'none', };

const buttonStyle = { width: '100%', padding: '0.6rem', backgroundColor: '#00f2fe', color: '#000', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', marginTop: '0.4rem', };

const socialButtonStyle = { ...buttonStyle, backgroundColor: '#db4437', color: '#fff', };

const footerStyle = { position: 'absolute', bottom: '1rem', textAlign: 'center', fontSize: '0.9rem', color: '#ffffff', width: '100%', opacity: 0.8, };

const signupCornerStyle = { position: 'absolute', top: '1rem', right: '1.5rem', color: '#00f2fe', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', };

if (stage === 'splash') { return (

<div style={backgroundStyle}>
<h1
style={{
fontSize: '2.8rem',
color: '#00f2fe',
animation: 'fadeIn 2s ease-in-out',
marginTop: '5rem',
}}
>
NEXRIDE
</h1>
<p
style={{
marginTop: '1.2rem',
fontSize: '1.4rem',
color: '#fff',
textAlign: 'center',
animation: 'fadeIn 3s ease-in-out',
}}
>
Your Journey Begins Here
</p>
<style jsx>{  @keyframes fadeIn {   0% {   opacity: 0;   transform: translateY(-20px);   }   100% {   opacity: 1;   transform: translateY(0);   }   }  }</style>
</div>
);
}if (stage === 'spinner') { return (

<div style={{ ...backgroundStyle, justifyContent: 'center' }}>
<div className="spinner" />
<style jsx>{  .spinner {   border: 6px solid #f3f3f3;   border-top: 6px solid #00f2fe;   border-radius: 50%;   width: 60px;   height: 60px;   animation: spin 1s linear infinite;   }   @keyframes spin {   0% {   transform: rotate(0deg);   }   100% {   transform: rotate(360deg);   }   }  }</style>
</div>
);
}
