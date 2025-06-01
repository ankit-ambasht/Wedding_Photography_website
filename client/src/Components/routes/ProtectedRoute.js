import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
   const isAdmin = sessionStorage.getItem('isAdmin') === 'true';
// const isAdmin = sessionStorage.getItem('isAdmin') === 'true';



if (!isAdmin) {
    return <Navigate to="/admin" replace />;
  }
  return children
  // return isAdmin ? children : <Navigate to="/login" />;
}



