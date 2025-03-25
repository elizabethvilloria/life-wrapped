// src/App.jsx
import './App.css';

function App() {
  return (
    <div className="homepage" style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>📆 Life Wrapped</h1>
      <p>Your life. Recapped beautifully.</p>

      <div style={{ marginTop: '2rem' }}>
        <button style={buttonStyle}>Log My Day</button>
        <button style={buttonStyle}>View Recap</button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '1rem 2rem',
  margin: '0.5rem',
  fontSize: '1rem',
  borderRadius: '8px',
  cursor: 'pointer',
};

export default App;
