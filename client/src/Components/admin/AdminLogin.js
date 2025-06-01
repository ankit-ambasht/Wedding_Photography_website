import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === 'admin123') {
      localStorage.setItem('isAdmin', 'true');
      // sessionStorage.setItem('isAdmin','true');
      navigate('/admin');
    } else {
      alert('Wrong password');
    }
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/30 p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">🔒 Admin Login</h2>
        
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/60 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        
        <button
          onClick={handleLogin}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-xl transition"
        >
          Login
        </button>
      </div>
    </div>
    {/* <div>
      <h2>Admin Login</h2>
      <input
        type="password"
        placeholder="Enter admin password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div> */}
    </>
   
  );
}
