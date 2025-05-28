'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Parcels() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleNavigate = (path) => {
    setLoading(true);
    setTimeout(() => {
      router.push(path);
    }, 800); // simulate loading time
  };

  return (
    <div style={{ ...container, backgroundImage: `url('/nexridebackgroundbus1.png')` }}>
      {loading && (
        <div style={loaderOverlay}>
          <div style={spinner}></div>
        </div>
      )}
      <h1 style={title}>Send or Receive Parcels</h1>
      <div style={grid}>
        {/* Send a Parcel */}
        <Card
          icon="https://img.icons8.com/ios-filled/100/parcel.png"
          title="Send a Parcel"
          onClick={() => handleNavigate('/send-parcel')}
        />

        {/* Receive a Parcel */}
        <Card
          icon="https://img.icons8.com/ios-filled/100/open-box.png"
          title="Receive a Parcel"
          onClick={() => handleNavigate('/receive-parcel')}
        />

        {/* Track a Parcel */}
        <Card
          icon="https://img.icons8.com/ios-filled/100/shipped.png"
          title="Track a Parcel"
          onClick={() => handleNavigate('/track-parcel')}
        />
      </div>
    </div>
  );
}

// Reusable Card Component
function Card({ icon, title, onClick }) {
  return (
    <div
      style={{ ...card, ...cardHover }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <img src={icon} alt={title} style={iconStyle} />
      <h3 style={heading}>{title}</h3>
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
        onClick={onClick}
      >
        Proceed
      </button>
    </div>
  );
}

// Styles
const container = {
  padding: '2rem',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
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
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '2rem',
  justifyContent: 'center',
};

const card = {
  background: 'rgba(0, 0, 0, 0.5)',
  padding: '2rem',
  borderRadius: '20px',
  textAlign: 'center',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(8px)',
  transition: 'transform 0.3s ease',
};

const cardHover = {
  cursor: 'pointer',
};

const iconStyle = {
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

// Loader styles
const loaderOverlay = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0,0,0,0.6)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
};

const spinner = {
  width: '60px',
  height: '60px',
  border: '8px solid #ccc',
  borderTop: '8px solid #4e54c8',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
};

// Add animation style (you must include this in a global CSS or <style> tag)
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2rem !important;
      }

      button {
        font-size: 0.9rem !important;
        padding: 0.6rem 1rem !important;
      }

      img {
        width: 60px !important;
        height: 60px !important;
      }
    }

    @media (max-width: 480px) {
      h1 {
        font-size: 1.5rem !important;
      }

      button {
        font-size: 0.8rem !important;
      }

      img {
        width: 50px !important;
        height: 50px !important;
      }
    }
  `;
  document.head.appendChild(style);
}
