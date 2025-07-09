import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Sponsor from './pages/Sponsor';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Navbar from './pages/Navbar'; 

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(null);
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} /> {}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/login" element={!user ? <Login onLoginSuccess={handleLoginSuccess} /> : <Navigate to="/" />} />
        <Route path="/logout" element={user ? <Logout onLogout={handleLogout} /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;