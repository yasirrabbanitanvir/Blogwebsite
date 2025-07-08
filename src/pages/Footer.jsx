import React from 'react';
import { FiSend } from 'react-icons/fi';

function Footer() {
  return (
    <>
      <footer className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Newsletter Text */}
            <div className="col-md-8 mb-4 mb-md-0">
              <h4 className="fw-bold">Newsletter Subscription</h4>
              <p className="text-muted mb-0">
                Stay updated! Subscribe to receive the latest articles and news.
              </p>
            </div>

            {/* Subscription Form */}
            <div className="col-md-4">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-label="Email"
                  required
                />
                <button className="btn btn-primary" type="button">
                  <FiSend />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="text-center py-3 bg-white border-top">
        <small className="text-muted">© {new Date().getFullYear()} All Rights Reserved by Yasir</small>
      </div>
    </>
  );
}

export default Footer;
