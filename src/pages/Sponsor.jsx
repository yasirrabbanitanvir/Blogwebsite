import React from 'react';
import Footer from './Footer';
import { BsCheckCircleFill } from 'react-icons/bs';

const Sponsor = () => {
  return (
    <div>
    

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
          <p className="lead text-center mb-4">
            By sponsoring our blog, you gain access to a dedicated audience and the opportunity to showcase your brand.
          </p>
          <ul className="list-unstyled fs-5 mx-auto" style={{ maxWidth: '600px' }}>
            <li className="d-flex align-items-center mb-3">
              <BsCheckCircleFill className="text-success me-2" /> Reach a targeted audience interested in your products
            </li>
            <li className="d-flex align-items-center mb-3">
              <BsCheckCircleFill className="text-success me-2" /> Enhance your brand visibility
            </li>
            <li className="d-flex align-items-center">
              <BsCheckCircleFill className="text-success me-2" /> Engage with our community through exclusive content
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-5" id="contactForm">
        <div className="container">
          <h2 className="text-center mb-4">Get in Touch</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
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
                <div className="text-center">
                  <button type="submit" className="btn btn-primary px-4">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sponsor;
