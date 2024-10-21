import React from 'react';
import BlogNavbar from './Navbar';
import Footer from './Footer';

function About() {
  return (
    <div>
      <BlogNavbar />

      {/* Hero Section with Background Image */}
      <section
        className="d-flex align-items-center text-center text-white"
        style={{
          backgroundImage: "url('./img/About page.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '80vh',
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
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="fw-bold">Our Mission</h2>
              <p>
                Our mission is to create a platform where writers can share their ideas, knowledge, and passion with the world.
              </p>

              <h2 className="fw-bold mt-5">Why Follow Us?</h2>
              <p>
                Stay updated with the latest insights, tutorials, and trends. Become part of a vibrant, growing community!
              </p>
            </div>

            {/* Sidebar Section */}
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Contact Us</h5>
                  <p className="card-text">
                    📧 Email: contact@myblog.com  
                    <br />
                    📞 Phone: 017XXXXXXXXX
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Follow Us</h5>
                  <p className="card-text">
                    Stay connected on social media!
                  </p>
                  <div className="d-flex gap-2">
                    <a href="#" className="btn btn-primary">Facebook</a>
                    <a href="#" className="btn btn-info">Twitter</a>
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
