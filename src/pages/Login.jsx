import React, { useState } from 'react';
import { postData } from '../api';
import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function Login({ onLoginSuccess }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await postData('login.php', form); 
    setMessage(result.message);
    if (result.success && onLoginSuccess) {
      onLoginSuccess(result.user);
    }
  };

  return (
    <>
      
      <div className="container mt-5 mb-5">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="w-50 mx-auto">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input name="email" id="email" type="email" className="form-control" required onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input name="password" id="password" type="password" className="form-control" required onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>

        {message && <p className="mt-3 text-center">{message}</p>}

        <p className="text-center mt-3">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
      <Footer />
    </>
  );
}
