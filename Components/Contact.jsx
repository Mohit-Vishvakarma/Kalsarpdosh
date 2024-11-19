import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
          <header className="header-section">
          <h1>Contact Now</h1>
          <p className="brand-description">Get Touch me</p>
        </header>
        <header className="header-section">
          <h1>Tirth Guru: Nahar Wala Panda</h1>
          <p className="brand-description">This is the Sidhnath Tirth Guru Nahar Wala Panda.</p>
        </header>

        <div className="contact-info">
          <div className="info-item">
            <h3>Contact Details</h3>
            <p><strong>Phone:</strong> <a id="contactNumber" href="tel:+919516784194">+91 9516784194</a></p>
            <p><strong>Email:</strong> sarthakshastri@gmail.com</p>
          </div>

          <div className="info-item">
            <h3>About Us</h3>
            <p>We are a company dedicated to providing excellent service and products. Our team is always available to help you with any queries.</p>
          </div>
        </div>

        <div className="social-icons">
          <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon" />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
