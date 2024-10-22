import React from 'react';
import BlogNavbar from './Navbar';
import Footer from './Footer';

const Sponsor = () => {
  return (
    <div>
      <BlogNavbar />

      {/* Hero Section */}
      <section
        className="d-flex align-items-center text-center text-white"
        style={{
          backgroundImage: "url('/img/Sponsor.jpg')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh',
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Become a Sponsor</h1>
          <p className="lead">Support our blog and promote your brand!</p>
        </div>
      </section>

      {/* Sponsorship Information Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Why Sponsor Us?</h2>
          <p className="lead text-center">
            By sponsoring our blog, you gain access to a dedicated audience and the opportunity to showcase your brand.
          </p>
          <ul className="list-unstyled">
            <li>✔ Reach a targeted audience interested in your products</li>
            <li>✔ Enhance your brand visibility</li>
            <li>✔ Engage with our community through exclusive content</li>
          </ul>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-5" id="contactForm">
        <div className="container">
          <h2 className="text-center mb-4">Get in Touch</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sponsor;
