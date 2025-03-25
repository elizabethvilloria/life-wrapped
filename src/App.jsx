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

import { useState } from 'react';

function LogPage() {
  const [form, setForm] = useState({
    mood: '',
    food: '',
    song: '',
    highlight: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Your log:", form);
    alert("Day logged! ✅");
    setForm({ mood: '', food: '', song: '', highlight: '' }); // Reset form
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
      <h2>📝 Log Your Day</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          Mood:
          <select name="mood" value={form.mood} onChange={handleChange} required>
            <option value="">Select mood</option>
            <option value="😊">😊 Happy</option>
            <option value="😐">😐 Meh</option>
            <option value="😔">😔 Sad</option>
            <option value="😤">😤 Stressed</option>
          </select>
        </label>

        <label>
          What you ate:
          <input type="text" name="food" value={form.food} onChange={handleChange} required />
        </label>

        <label>
          Song of the day:
          <input type="text" name="song" value={form.song} onChange={handleChange} />
        </label>

        <label>
          Highlight of the day:
          <textarea name="highlight" value={form.highlight} onChange={handleChange} rows={3} />
        </label>

        <button type="submit" style={{ padding: '0.8rem', fontWeight: 'bold' }}>Submit</button>
      </form>
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
