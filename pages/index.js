export default function Home() {
  return (
    <div style={{ 
      background: 'linear-gradient(to right, #4facfe, #00f2fe)', 
      minHeight: '100vh', 
      padding: '2rem', 
      color: '#fff', 
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Welcome to Zvishavane Rides
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Move around Zvishavane faster, cheaper and smarter.
      </p>

      <div style={{
        background: '#ffffff10',
        padding: '1.5rem',
        borderRadius: '12px',
        maxWidth: '400px'
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
          style={{
            backgroundColor: '#fff',
            color: '#0077ff',
            padding: '0.8rem',
            borderRadius: '8px',
            border: 'none',
            width: '100%',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '1rem'
          }}
        >
          Request Ride
        </button>
      </div>
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
