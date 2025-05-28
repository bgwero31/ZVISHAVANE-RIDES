'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const handlePopState = () => {
      router.push('/login');
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [router]);

  return (
    <>
      <div style={container}>
        <h1 className="nexride-heading">NEXRIDE</h1>
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
          <Link href="/driver" legacyBehavior>
            <a style={driverLink}>Are you a driver?</a>
          </Link>
        </div>

        <footer style={footer}>NexRide © 2025</footer>
      </div>

      {/* Global animation styles */}
      <style jsx global>{`
        @keyframes fadeBlueBlack {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .nexride-heading {
          font-size: 3.5rem;
          font-weight: bold;
          text-align: center;
          background: linear-gradient(270deg, #00c6ff, #000000);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: fadeBlueBlack 6s ease infinite;
          letter-spacing: 0.15em;
          user-select: none;
          text-shadow:
            1px 1px 2px #00000088,
            0 0 6px #00c6ff,
            0 0 12px #0050aa;
        }
      `}</style>
    </>
  );
}

function DashboardCard({ title, icon, href }) {
  return (
    <Link href={href} legacyBehavior>
      <a style={{ textDecoration: 'none' }}>
        <div style={gridItem}>
          <img src={icon} alt={title} style={iconStyle} />
          <p style={{ margin: 0, fontWeight: 'bold' }}>{title}</p>
        </div>
      </a>
    </Link>
  );
}

// ========================== STYLES ==========================

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

const mottoStyle = {
  fontSize: '1.2rem',
  fontStyle: 'italic',
  marginBottom: '2rem',
  textAlign: 'center',
  color: '#d0f0ff',
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
