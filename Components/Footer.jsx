import React from 'react'
import { IoHome } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './Footer.css'

export default function Footer() {
  return (
    <section id="Footer">
        <div className="footer">
            
            <div className="contact">
                <h3 className='footerContactHeading'>Contact Us</h3>
                {/* Address  */}
                <div className="item">
                    <IoHome />
                    <p>Sidhnath Ghat, Bherugad Ujjain.</p>
                </div>

                {/* phone */}
                <div className="item">
                    <FaPhoneVolume />
                    <p><a href="tel:+91 9516784194">9516784194</a></p>
                </div>

                {/* email */}
                <div className="item">
                    <MdAttachEmail />
                    <p>sarthakshastry@gmail.com</p>
                </div>

                {/* whatsapp */}
                <div className="item">
                <FaSquareWhatsapp />
                <p>9516784194</p>
                </div>
            </div>
            <div className="footerAbout">
                <h3 className='footerContactHeading'>About us</h3>
                <p className='footerAboutParagraph'>सिद्धनाथ घाट, उज्जैन के प्राचीन और पवित्र स्थलों में से एक है, जहाँ हमारी **नाहर वाल पंडा** परिवार की कई पीढ़ियाँ तीर्थ गुरु के रूप में अपनी सेवाएँ देती आ रही हैं। हमारी विशेषता है कि हम हर प्रकार की पूजन सेवा सरल और पवित्र तरीके से कराने में आपकी मदद करते हैं।
                    <span className='aboutReadMoreBtn'>
                    {/* <Link to="/">Go to About</Link> */}
                    </span>
                </p>
            </div>

            <p className='copyright'>Copyright@2024</p>

<div className="map-section">
          <h3>Sidhnath, Bherugar, Ujjain</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.5162994918596!2d75.77402687430833!3d23.22429200877237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396377b3b2831b83%3A0x6ddf73f885e151db!2sSiddhavat%20Ghat!5e0!3m2!1sen!2sin!4v1731594429193!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        </div> 
    </section>
  )
}
