'use client';

export default function Buses() { const buses = [ { id: 1, name: 'City Express', from: 'Nairobi', to: 'Mombasa', seats: 12 }, { id: 2, name: 'Highway Star', from: 'Kisumu', to: 'Nakuru', seats: 5 }, { id: 3, name: 'Night Rider', from: 'Eldoret', to: 'Nairobi', seats: 8 }, ];

return ( <div style={container}> <h1 style={title}>Available Buses</h1> <div style={grid}> {buses.map((bus) => ( <div key={bus.id} style={card}> <h2>{bus.name}</h2> <p>{bus.from} → {bus.to}</p> <p>Seats Available: {bus.seats}</p> <button style={button}>Book Now</button> </div> ))} </div> </div> ); }

const container = { padding: '2rem', fontFamily: 'Segoe UI, sans-serif', background: 'linear-gradient(135deg, #000428, #004e92)', minHeight: '100vh', color: '#fff' };

const title = { textAlign: 'center', marginBottom: '2rem', };

const grid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', };

const card = { backgroundColor: '#003366', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)', };

const button = { marginTop: '1rem', padding: '0.6rem 1.2rem', backgroundColor: '#00bfff', border: 'none', borderRadius: '8px', color: '#fff', fontWeight: 'bold', cursor: 'pointer', };

