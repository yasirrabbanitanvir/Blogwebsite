
import React, { useState } from 'react';
import { postData } from '../api';
import BlogNavbar from './Navbar';
import Footer from './Footer';

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await postData('register.php', form); 
    setMessage(result.message);
  };

  return (
    <>
      <BlogNavbar />
      <div className="container mt-5 mb-5">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className="w-50 mx-auto">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input name="username" id="username" type="text" className="form-control" required onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input name="email" id="email" type="email" className="form-control" required onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input name="password" id="password" type="password" className="form-control" required onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
        {message && <p className="mt-3 text-center">{message}</p>}
      </div>
      <Footer />
    </>
  );
}
