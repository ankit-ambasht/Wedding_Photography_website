import React, { useState } from 'react';
import axios from 'axios';
import AdminHeader from './AdminHeader';

export default function AdminPanel() {
  const [image, setImage] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', image);
    await axios.post('http://localhost:5000/upload', formData);
    alert('Image uploaded!');
  };

  return (
    <>
    <AdminHeader />
 <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/30 p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Upload Image</h2>

        <input type="file" onChange={e => setImage(e.target.files[0])}
         className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/60 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <button onClick={handleUpload}
         className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-xl transition"
        >Upload</button>
      </div>
    </div>

    </>
   
  );
}
