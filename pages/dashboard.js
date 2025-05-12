'use client';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <div style={container}>
      <h1 style={title}>Welcome to ZVISHAVANE RIDES</h1>
      <div style={grid}>
        <div style={gridItem} onClick={() => handleNavigate('/cars')}>
          <img src="https://img.icons8.com/ios-filled/100/car--v1.png" style={icon} alt="Cars" />
          <p>Cars</p>
        </div>
        <div style={gridItem} onClick={() => handleNavigate('/buses')}>
          <img src="https://img.icons8.com/ios-filled/100/bus.png" style={icon} alt="Buses" />
          <p>Buses</p>
        </div>
        <div style={gridItem} onClick={() => handleNavigate('/parcels')}>
          <img src="https://img.icons8.com/ios-filled/100/parcel.png" style={icon} alt="Parcels" />
          <p>Parcels</p>
        </div>
        <div style={gridItem} onClick={() => handleNavigate('/settings')}>
          <img src="https://img.icons8.com/ios-filled/100/settings.png" style={icon} alt="Settings" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
}

const container = {
  padding: '1.5rem',
  textAlign: 'center',
  fontFamily: 'Segoe UI, sans-serif',
  background: 'linear-gradient(135deg, #000428, #004e92)',
  color: '#fff',
  minHeight: '100vh',
};

const title = {
  fontSize: '1.8rem',
  marginBottom: '2rem',
};

const grid = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1.4rem',
};

const gridItem = {
  backgroundColor: '#003366',
  borderRadius: '15px',
  padding: '1.5rem',
  cursor: 'pointer',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
  transition: '0.3s ease-in-out',
};

const icon = {
  width: '50px',
  marginBottom: '0.8rem',
};
