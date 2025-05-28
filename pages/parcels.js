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
        <div style={{ ...card, ...hoverable }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2933/2933927.png"
            alt="Send Parcel"
            style={icon}
          />
          <h3 style={cardTitle}>Send a Parcel</h3>
          <button style={{ ...button, ...hoverButton }} onClick={() => handleNavigate('/send-parcel')}>Proceed</button>
        </div>
        <div style={{ ...card, ...hoverable }}>
          <img
            src="https://img.icons8.com/ios-filled/100/open-box.png"
            alt="Receive Parcel"
            style={icon}
          />
          <h3 style={cardTitle}>Receive a Parcel</h3>
          <button style={{ ...button, ...hoverButton }} onClick={() => handleNavigate('/receive-parcel')}>Proceed</button>
        </div>
        <div style={{ ...card, ...hoverable }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2204/2204447.png"
            alt="Track Parcel"
            style={icon}
          />
          <h3 style={cardTitle}>Track a Parcel</h3>
          <button style={{ ...button, ...hoverButton }} onClick={() => handleNavigate('/track-parcel')}>Proceed</button>
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
  fontSize: '1.6rem',
  marginBottom: '2rem',
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '1.5rem',
  justifyContent: 'center',
};

const card = {
  backgroundColor: '#ffffff22',
  padding: '1rem',
  borderRadius: '12px',
  textAlign: 'center',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  backdropFilter: 'blur(10px)',
  transition: 'transform 0.3s ease',
};

const hoverable = {
  transition: 'transform 0.3s ease',
  ':hover': {
    transform: 'scale(1.05)',
  },
};

const icon = {
  width: '50px',
  marginBottom: '0.8rem',
  filter: 'drop-shadow(0 0 5px #fff)',
};

const cardTitle = {
  fontSize: '1rem',
  margin: '0.5rem 0',
};

const button = {
  marginTop: '0.8rem',
  padding: '0.4rem 0.8rem',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: '#fff',
  color: '#4e54c8',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '0.9rem',
  transition: 'transform 0.2s ease, background 0.3s',
};

const hoverButton = {
  ':hover': {
    backgroundColor: '#f0f0f0',
    transform: 'scale(1.05)',
  },
};
