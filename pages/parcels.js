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
        <div
          style={{ ...card, ...cardHover }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img
            src="https://img.icons8.com/ios-filled/100/parcel.png"
            alt="Send Parcel"
            style={icon}
          />
          <h3 style={heading}>Send a Parcel</h3>
          <button
            style={button}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#4e54c8';
              e.target.style.color = '#fff';
              e.target.style.boxShadow = '0 0 15px #8f94fb';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#fff';
              e.target.style.color = '#4e54c8';
              e.target.style.boxShadow = 'none';
            }}
            onClick={() => handleNavigate('/send-parcel')}
          >
            Proceed
          </button>
        </div>

        <div
          style={{ ...card, ...cardHover }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img
            src="https://img.icons8.com/ios-filled/100/open-box.png"
            alt="Receive Parcel"
            style={icon}
          />
          <h3 style={heading}>Receive a Parcel</h3>
          <button
            style={button}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#4e54c8';
              e.target.style.color = '#fff';
              e.target.style.boxShadow = '0 0 15px #8f94fb';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#fff';
              e.target.style.color = '#4e54c8';
              e.target.style.boxShadow = 'none';
            }}
            onClick={() => handleNavigate('/receive-parcel')}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}

// Styles
const container = {
  padding: '2rem',
  background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
  minHeight: '100vh',
  color: '#fff',
  fontFamily: 'Segoe UI, sans-serif',
};

const title = {
  textAlign: 'center',
  fontSize: '2.5rem',
  fontWeight: '600',
  marginBottom: '2rem',
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
  justifyContent: 'center',
};

const card = {
  background: 'rgba(255, 255, 255, 0.05)',
  padding: '2rem',
  borderRadius: '20px',
  textAlign: 'center',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(10px)',
  transition: 'transform 0.3s ease',
};

const cardHover = {
  cursor: 'pointer',
};

const icon = {
  width: '80px',
  height: '80px',
  marginBottom: '1rem',
  filter: 'drop-shadow(0 0 8px #8f94fb)',
};

const heading = {
  fontSize: '1.5rem',
  fontWeight: '500',
  marginBottom: '1rem',
};

const button = {
  marginTop: '1rem',
  padding: '0.8rem 1.5rem',
  borderRadius: '10px',
  border: 'none',
  backgroundColor: '#fff',
  color: '#4e54c8',
  fontWeight: 'bold',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
};
