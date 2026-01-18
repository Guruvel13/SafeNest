import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landingpage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* Add more routes here as needed */}
    </Routes>
  );
}

export default App;
