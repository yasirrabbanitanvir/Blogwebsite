import React from 'react';
import BlogNavbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  return (
    <div>
      <BlogNavbar />

      {/* Hero Section with Background Image */}
      <section
        className="d-flex align-items-center text-center text-white"
        style={{
          backgroundImage: "url('./img/Contact.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh',
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Get in Touch</h1>
          <p className="lead">We would love to hear from you!</p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">Contact Information</h2>
          <p>If you have any questions, comments, or suggestions, feel free to reach out!</p>
          <ul className="list-unstyled">
            <li>
              <i className="fas fa-phone"></i> +1 234 567 890
            </li>
            <li>
              <i className="fas fa-envelope"></i> email@example.com
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> Your Location
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-5" id="contactForm">
        <div className="container">
          <h2 className="text-center mb-4">Send Us a Message</h2>
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

export default Contact;
