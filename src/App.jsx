import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
