'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      @keyframes blueBlackFade {
        0% { color: #00c6ff; }
        50% { color: #000000; }
        100% { color: #00c6ff; }
      }
      .fade-letter {
        display: inline-block;
        animation: blueBlackFade 2.5s ease-in-out infinite;
      }
      .fade-letter:nth-child(1) { animation-delay: 0s; }
      .fade-letter:nth-child(2) { animation-delay: 0.2s; }
      .fade-letter:nth-child(3) { animation-delay: 0.4s; }
      .fade-letter:nth-child(4) { animation-delay: 0.6s; }
      .fade-letter:nth-child(5) { animation-delay: 0.8s; }
      .fade-letter:nth-child(6) { animation-delay: 1s; }
      .fade-letter:nth-child(7) { animation-delay: 1.2s; }
      .fade-letter:nth-child(8) { animation-delay: 1.4s; }
    `;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  return (
    <div style={container}>
      <h1 style={logoStyle}>
        {"NEXRIDE".split("").map((char, index) => (
          <span key={index} className="fade-letter">{char}</span>
        ))}
      </h1>

      <p style={mottoStyle}>Where Every Ride, Feels Right.</p>

      <div style={grid}>
        <DashboardCard title="Cars" icon="https://img.icons8.com/ios-filled/100/car--v1.png" href="/ride" />
        <DashboardCard title="Buses" icon="https://img.icons8.com/ios-filled/100/bus.png" href="/buses" />
        <DashboardCard title="Parcels" icon="https://img.icons8.com/ios-filled/100/shopping-bag.png" href="/parcels" />
        <DashboardCard title="Settings" icon="https://img.icons8.com/ios-filled/100/settings.png" href="/settings" />
      </div>

      <div style={driverText}>
        <Link href="/driver" style={driverLink}>Are you a driver?</Link>
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

// ========== STYLES ==========

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

const logoStyle = {
  fontSize: '3.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  letterSpacing: '0.15em',
  fontFamily: 'Segoe UI, sans-serif',
};

const mottoStyle = {
  fontSize: '1.2rem',
  color: '#b0e0ff',
  marginBottom: '2rem',
  fontStyle: 'italic',
  textAlign: 'center',
};

const grid = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1.5rem',
};

const gridItem = {
  backgroundColor: '#fff',
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
