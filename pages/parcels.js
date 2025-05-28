'use client';
import { useRouter } from 'next/navigation';

export default function Parcels() {
  const router = useRouter();

  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <div style={container}>
      <h1 style={title}>Send or Receive Parcels</h1>
      <div style={grid}>
        <div style={card}>
          <img
            src="/parcel-send.svg" // Add this to /public folder
            alt="Send Parcel"
            style={icon}
          />
          <h3>Send a Parcel</h3>
          <button style={button} onClick={() => handleNavigate('/send-parcel')}>
            Proceed
          </button>
        </div>
        <div style={card}>
          <img
            src="/parcel-receive.svg" // Add this to /public folder
            alt="Receive Parcel"
            style={icon}
          />
          <h3>Receive a Parcel</h3>
          <button style={button} onClick={() => handleNavigate('/receive-parcel')}>
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}

const container = {
  padding: '2rem',
  background: 'linear-gradient(to right, #4e54c8, #8f94fb)',
  minHeight: '100vh',
  color: '#fff',
  fontFamily: 'Segoe UI, sans-serif',
};

const title = {
  textAlign: 'center',
  fontSize: '2.5rem',
  marginBottom: '2rem',
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '2rem',
};

const card = {
  backgroundColor: '#ffffff33',
  padding: '2rem',
  borderRadius: '15px',
  textAlign: 'center',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  transition: 'transform 0.3s ease',
};

const icon = {
  width: '80px',
  marginBottom: '1rem',
};

const button = {
  marginTop: '1rem',
  padding: '0.6rem 1.4rem',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#fff',
  color: '#4e54c8',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s',
};

// Add hover animation with Tailwind or custom CSS (optional)
