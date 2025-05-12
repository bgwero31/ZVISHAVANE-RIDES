'use client';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div style={container}>
      <h1 style={title}>Welcome to B.JAY RIDES</h1>
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

const container = {
  padding: '2rem',
  fontFamily: 'Segoe UI, sans-serif',
  background: 'linear-gradient(135deg, #000428, #004e92)',
  color: '#fff',
  minHeight: '100vh',
};

const title = {
  fontSize: '2rem',
  textAlign: 'center',
  marginBottom: '2rem',
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
