import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      backgroundImage: 'url("/bg-cars.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '2rem',
      color: '#fff',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Top Section */}
      <div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Welcome to Zvishavane Rides
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Move around Zvishavane faster, cheaper and smarter.
        </p>

        <div style={{
          background: '#ffffff20',
          padding: '1.5rem',
          borderRadius: '12px',
          maxWidth: '400px',
          backdropFilter: 'blur(8px)'
        }}>
          <input
            type="text"
            placeholder="Pickup Location"
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Dropoff Location"
            style={inputStyle}
          />
          <input
            type="number"
            placeholder="Offer Price"
            style={inputStyle}
          />
          <button
            style={buttonStyle}
          >
            Request Ride
          </button>
        </div>

        {/* Navigation */}
        <div style={{ marginTop: '2rem' }}>
          <Link href="/login">
            <button style={{ ...navButtonStyle }}>Login</button>
          </Link>
          <Link href="/signup">
            <button style={{ ...navButtonStyle, marginLeft: '1rem' }}>Sign Up</button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        marginTop: '3rem',
        textAlign: 'center',
        padding: '1rem',
        color: '#ccc',
        fontSize: '0.9rem'
      }}>
        &copy; {new Date().getFullYear()} Zvishavane Rides. All rights reserved.
      </footer>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.8rem',
  marginBottom: '1rem',
  borderRadius: '8px',
  border: 'none',
  fontSize: '1rem'
};

const buttonStyle = {
  backgroundColor: '#fff',
  color: '#0077ff',
  padding: '0.8rem',
  borderRadius: '8px',
  border: 'none',
  width: '100%',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: '1rem'
};

const navButtonStyle = {
  backgroundColor: '#ff7e5f',
  color: '#fff',
  padding: '0.6rem 1.2rem',
  border: 'none',
  borderRadius: '6px',
  fontSize: '1rem',
  cursor: 'pointer'
};
