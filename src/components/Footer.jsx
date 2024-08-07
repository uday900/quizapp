import React, { useState } from 'react';
import './Footer.css';

function Footer() {
  // State for contact details
  const [contactDetails, setContactDetails] = useState({
    email: 'quizsupport@example.com',
    phone: '+91 (123) 456-7890',
    address: '1234 Ongole, Andhra Pradesh, IND',
  });

  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row mb-4">
          {/* Social Icons */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Follow Us</h5>
            <div className="d-flex">
              <a href="https://facebook.com" className="text-light me-3 social-icon" aria-label="Facebook">
                {/* <FaFacebookF size={24} /> */}
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://twitter.com" className="text-light me-3 social-icon" aria-label="Twitter">
                {/* <FaTwitter size={24} /> */}
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-light me-3 social-icon" aria-label="Instagram">
                {/* <FaInstagram size={24} /> */}
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          
          {/* Important Quizzes */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Important Quizzes</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="quiz-links">React Quiz</a></li>
              <li><a href="#!" className="quiz-links">React Native Quiz</a></li>
              <li><a href="#!" className="quiz-links">JavaScript Quiz</a></li>
              <li><a href="#!" className="quiz-links">CSS Quiz</a></li>
            </ul>
          </div>
          
          {/* Contact Details */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Contact Us</h5>
            <p className="mb-1">Email: {contactDetails.email}</p>
            <p className="mb-1">Phone: {contactDetails.phone}</p>
            <p className="mb-1">Address: {contactDetails.address}</p>
          </div>
        </div>

        <div className="row mb-4">
          {/* Signup for New Users */}
          <div className="col-md-4 mb-3">
            <h5 className="mb-3">Sign Up for Updates</h5>
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
          </div>

          {/* Additional Information */}
          <div className="col-md-8 mb-3">
            <h5 className="mb-3">Additional Info</h5>
            <p>
              We are committed to providing the best quizzes to enhance your learning experience. 
              Stay connected with us through our social media channels and sign up for updates to get the latest news and offers.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-dark text-light text-center py-1">
        <div className="container">
          <p className="mb-0">© 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
