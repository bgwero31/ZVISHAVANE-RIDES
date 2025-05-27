'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // Add keyframes for motto fade animation
    const keyframes = `
      @keyframes fadeBlue {
        0% { color: #00c6ff; }
        50% { color: #0072ff; }
        100% { color: #00c6ff; }
      }
    `;
    const styleTag = document.createElement('style');
    styleTag.innerHTML = keyframes;
    document.head.appendChild(styleTag);

    // Handle browser back button
    const handlePopState = () => {
      router.push('/login'); // Redirect to login on back navigation
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [router]);

  return (
    <div style={container}>
      <div style={topBar}>
        <Link href="/login" style={backLink}>
          ← Back
        </Link>
      </div>

      <h1 style={nexrideStyle}>NEXRIDE</h1>
      <p style={mottoStyle}>Where Every Ride, Feels Right.</p>

      <div style={grid}>
        <DashboardCard
          title="Cars"
          icon="https://img.icons8.com/ios-filled/100/car--v1.png"
          href="/ride"
        />
        <DashboardCard
          title="Buses"
          icon="https://img.icons8.com/ios-filled/100/bus.png"
          href="/buses"
        />
        <DashboardCard
          title="Parcels"
          icon="https://img.icons8.com/ios-filled/100/shopping-bag.png"
          href="/parcels"
        />
        <DashboardCard
          title="Settings"
          icon="https://img.icons8.com/ios-filled/100/settings.png"
          href="/settings"
        />
      </div>

      <div style={driverText}>
        <Link href="/driver" style={driverLink}>
          Are you a driver?
        </Link>
      </div>

      <footer style={footer}>NexRide © 2025</footer>
    </div>
  );
}

function DashboardCard({ title, icon, href }) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <div style={gridItem}>
        <img src={icon} alt={title} style={iconStyle} />
        <p style={{ margin: 0, fontWeight: 'bold' }}>{title}</p>
      </div>
    </Link>
  );
}

// Styles remain the same
const container = {
  padding: '2rem',
  fontFamily: 'Segoe UI, sans-serif',
  backgroundImage: 'url("/nexridebackground2.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  color: '#fff',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const topBar = {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  marginBottom: '1rem',
};

const backLink = {
  color: '#00c6ff',
  fontSize: '1rem',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const nexrideStyle = {
  fontSize: '3rem',
  fontWeight: 'bold',
  textAlign: 'center',
  fontFamily: 'Segoe UI, sans-serif',
  background: 'linear-gradient(90deg, #00c6ff 0%, #000000 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  letterSpacing: '0.1em',
  userSelect: 'none',
};

const mottoStyle = {
  fontSize: '1.2rem',
  fontStyle: 'italic',
  marginBottom: '2rem',
  textAlign: 'center',
  background: 'linear-gradient(45deg, #00c6ff, #0072ff, #0055ff)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  animation: 'fadeBlue 4s ease-in-out infinite',
  userSelect: 'none',
};

const grid = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1.5rem',
};

const gridItem = {
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  color: '#003366',
  padding: '2rem',
  borderRadius: '12px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
};

const iconStyle = {
  width: '50px',
  marginBottom: '1rem',
};

const driverText = {
  marginTop: '2rem',
};

const driverLink = {
  color: '#00FFFF',
  textDecoration: 'underline',
  fontWeight: 'bold',
};

const footer = {
  marginTop: '3rem',
  color: '#aaa',
  fontSize: '0.9rem',
};
