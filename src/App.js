import './App.css';
import React from "react";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import MainDashboard from './views/main-dashboard/main-dashboard';
import FileDashboard from './views/file-dashboard/file-dashboard'
import RegisterPage from './RegisterPage'

function App() {
  return (
    <div className="container-app">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainDashboard />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path="file-dashboard" element={<FileDashboard />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

