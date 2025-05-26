'use client';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Dashboard() {
  useEffect(() => {
    console.log("Dashboard loaded — check if 'Are you a driver?' is visible.");
  }, []);

  return (
    <div style={container}>
      <h1 style={gradientTitle}>NEXRIDE</h1>

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

      {/* Driver Link */}
      <div style={driverLinkContainer}>
        <p style={{ color: '#00FFFF', fontWeight: 'bold' }}>
          Are you a driver?{' '}
          <Link href="/driver" style={{ color: '#FFFFFF', textDecoration: 'underline' }}>
            Click here
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div style={footer}>
        NexRide © 2025
      </div>
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

// Styles
const container = {
  padding: '2rem',
  fontFamily: 'Segoe UI, sans-serif',
  background: 'linear-gradient(135deg, #000428, #004e92)',
  color: '#fff',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const gradientTitle = {
  fontSize: '2.5rem',
  textAlign: 'center',
  marginBottom: '2rem',
  background: 'linear-gradient(90deg, #00c6ff, #0072ff)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 'bold',
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

const driverLinkContainer = {
  marginTop: '3rem',
  textAlign: 'center',
};

const footer = {
  textAlign: 'center',
  marginTop: '3rem',
  fontSize: '0.9rem',
  color: '#aaa',
};
