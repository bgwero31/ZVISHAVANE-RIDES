import { useState, useEffect } from 'react';

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') setDarkMode(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="flex items-center justify-between mb-4">
        <span>Dark Mode</span>
        <button
          onClick={toggleTheme}
          className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded"
        >
          {darkMode ? 'Disable' : 'Enable'}
        </button>
      </div>
    </div>
  );
}
