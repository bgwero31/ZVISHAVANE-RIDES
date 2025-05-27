import React, { useState, useEffect, useContext, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// 1. Create the Theme Context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const isDark = stored === 'dark';
    setDarkMode(isDark);
    document.body.className = isDark ? 'dark' : 'light';
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.body.className = newMode ? 'dark' : 'light';
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

// 2. Settings Page
const Settings = () => {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <div style={{ padding: 20 }}>
      <h2>Settings</h2>
      <button onClick={toggleTheme}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

// 3. Dashboard Page
const Dashboard = () => (
  <div style={{ padding: 20 }}>
    <h1>Dashboard</h1>
    <ul>
      <li><Link to="/settings">Go to Settings</Link></li>
    </ul>
  </div>
);

// 4. App Component
export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

// 5. Add styles to index.css or inside your HTML
/*
In your index.css or global style:

body.dark {
  background-color: #111;
  color: #eee;
}
body.light {
  background-color: #fff;
  color: #111;
}
button {
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
}
*/
