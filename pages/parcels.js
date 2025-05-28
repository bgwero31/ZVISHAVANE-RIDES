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
            src="https://cdn-icons-png.flaticon.com/512/7341/7341187.png"
            alt="Send Parcel"
            style={icon}
          />
          <h3 style={heading}>Send a Parcel</h3>
          <button style={button} onClick={() => handleNavigate('/send-parcel')}>
            Proceed
          </button>
        </div>
        <div style={card}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/9291/9291644.png"
            alt="Receive Parcel"
            style={icon}
          />
          <h3 style={heading}>Receive a Parcel</h3>
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
  fontWeight: 'bold',
  marginBottom: '2rem',
};

const grid = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2rem',
  justifyContent: 'center',
  maxWidth: '800px',
  margin: '0 auto',
};

const card = {
  backgroundColor: '#ffffff22',
  padding: '2rem',
  borderRadius: '20px',
  textAlign: 'center',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
  transition: 'transform 0.3s',
};

const icon = {
  width: '80px',
  height: '80px',
  marginBottom: '1rem',
};

const heading = {
  fontSize: '1.3rem',
  marginBottom: '1rem',
};

const button = {
  padding: '0.8rem 1.5rem',
  borderRadius: '10px',
  border: 'none',
  backgroundColor: '#fff',
  color: '#4e54c8',
  fontWeight: 'bold',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: '0.3s',
};
