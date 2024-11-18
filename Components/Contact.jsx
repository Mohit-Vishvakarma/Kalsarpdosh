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
            <p><strong>Phone:</strong> +123 456 7890</p>
            <p><strong>Phone:</strong> +123 456 7890</p>
            <p><strong>Email:</strong> contact@yourbrand.com</p>
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

        {/* <div className="map-section">
          <h3>Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.5162994918596!2d75.77402687430833!3d23.22429200877237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396377b3b2831b83%3A0x6ddf73f885e151db!2sSiddhavat%20Ghat!5e0!3m2!1sen!2sin!4v1731594429193!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div> */}
      </div>

      {/* <div className="menu-section">
        <h3>Menu</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div> */}
    </div>
  );
};

export default Contact;
