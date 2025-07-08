import React from 'react';
import BlogNavbar from './Navbar';
import Footer from './Footer';
import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter } from 'react-icons/fa';

function About() {
  return (
    <div>
      <BlogNavbar />

      {/* Hero Section */}
      <section
        className="d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage: "url('/img/About page.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '80vh',
          padding: '60px 15px',
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">About Our Blog</h1>
          <p className="lead mt-3">
            Welcome to our blog! Discover inspiring stories and the latest trends.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            {/* Left Content */}
            <div className="col-lg-8 mb-4">
              <h2 className="fw-bold mb-3">Our Mission</h2>
              <p>
                Our mission is to create a platform where writers can share their ideas, knowledge, and passion with the world.
              </p>

              <h2 className="fw-bold mb-3 mt-5">Why Follow Us?</h2>
              <p>
                Stay updated with the latest insights, tutorials, and trends. Become part of a vibrant, growing community!
              </p>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h5 className="card-title mb-3">Contact Us</h5>
                  <p className="card-text mb-2 d-flex align-items-center">
                    <FaEnvelope className="me-2" />
                    <a href="mailto:contact@myblog.com" className="text-decoration-none">contact@myblog.com</a>
                  </p>
                  <p className="card-text d-flex align-items-center">
                    <FaPhone className="me-2" />
                    017XXXXXXXXX
                  </p>
                </div>
              </div>

              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title mb-3">Follow Us</h5>
                  <p className="card-text mb-3">Stay connected on social media!</p>
                  <div className="d-flex gap-2 flex-wrap">
                    <a href="#" className="btn btn-primary btn-sm d-flex align-items-center">
                      <FaFacebookF className="me-2" /> Facebook
                    </a>
                    <a href="#" className="btn btn-info btn-sm text-white d-flex align-items-center">
                      <FaTwitter className="me-2" /> Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
