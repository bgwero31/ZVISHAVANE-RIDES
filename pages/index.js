import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SplashScreen from '../components/SplashScreen';
import Spinner from '../components/Spinner';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  const [stage, setStage] = useState('splash'); // splash, spinner, login
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

  const handleLogin = (emailOrPhone, password) => {
    if (emailOrPhone.trim() && password === 'shabhani') {
      router.push('/dashboard');
    } else {
      alert('Please check your email/phone and password');
    }
  };

  if (stage === 'splash') return <SplashScreen />;
  if (stage === 'spinner') return <Spinner />;

  return <LoginForm onLogin={handleLogin} />;
}
