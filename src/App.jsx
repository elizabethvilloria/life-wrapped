import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/log" element={<LogPage />} />
      <Route path="/recap" element={<RecapPage />} />
    </Routes>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>📆 Life Wrapped</h1>
      <p>Your life. Recapped beautifully.</p>
      <div style={{ marginTop: '2rem' }}>
        <button style={buttonStyle} onClick={() => navigate('/log')}>Log My Day</button>
        <button style={buttonStyle} onClick={() => navigate('/recap')}>View Recap</button>
      </div>
    </div>
  );
}

function LogPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>📝 Log Your Day</h2>
      <p>Form coming soon!</p>
    </div>
  );
}

function RecapPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>📊 Your Recap</h2>
      <p>Recap data will be shown here.</p>
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
