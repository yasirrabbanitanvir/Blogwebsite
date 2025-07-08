import React from 'react';
import BlogNavbar from './Navbar';
import Footer from './Footer';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <BlogNavbar />

      {/* Hero Section */}
      <section
        className="d-flex align-items-center text-center text-white"
        style={{
          backgroundImage: "url('/img/Contact.jpg')",
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

      {/* Contact Information */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Contact Information</h2>
          <p className="mb-4">If you have any questions, comments, or suggestions, feel free to reach out!</p>
          <ul className="list-unstyled fs-5">
            <li className="mb-2">
              <FaPhoneAlt className="me-2 text-primary" />
              017XXXXXXXXX
            </li>
            <li className="mb-2">
              <FaEnvelope className="me-2 text-danger" />
              contact@myblog.com
            </li>
            <li>
              <FaMapMarkerAlt className="me-2 text-success" />
              Dhaka, Bangladesh
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Send Us a Message</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
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

export default Contact;
