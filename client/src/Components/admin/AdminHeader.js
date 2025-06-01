import React from 'react';
import {Link } from 'react-router-dom';
import { FaImage, FaVideo, FaEnvelope, FaUserCircle } from 'react-icons/fa';

export default function AdminHeader() {
 
  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Title */}
        <div className="text-xl font-bold tracking-wide text-purple-400">
          NICHAYSRIVASTAV
        </div>

        {/* Nav Items */}
        <nav className="flex items-center space-x-6">
          <Link
            to="/Upload/gallery"
            className="flex items-center gap-2 hover:text-purple-400 transition"
          >
            <FaImage /> <span>Upload Image</span>
          </Link>

          <Link
            to="/Upload/youtube/videoLink"
            className="flex items-center gap-2 hover:text-purple-400 transition"
          >
            <FaVideo /> <span>Upload Video</span>
          </Link>

          <Link
            to="/Upload/Faq"
            className="flex items-center gap-2 hover:text-purple-400 transition"
          >
            <FaEnvelope /> <span>Messages</span>
          </Link>
        </nav>


        {/* Admin Profile / Logout */}
        <div className="hover:text-red-400 cursor-pointer">
          <FaUserCircle size={24} />
        </div>
      </div>
    </header>
  );
}
