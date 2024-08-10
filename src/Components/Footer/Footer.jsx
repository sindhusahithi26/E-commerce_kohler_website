import React from 'react';
import { collapse_filter } from './Footer.js';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className='footer-top'>
        <div id="images">
          <p id='follow'>Follow Us</p>
          <i className="fa fa-facebook" style={{fontSize:17}}></i>
          <i className="fa fa-twitter" style={{fontSize:17}}></i>
          <i className="fa fa-instagram" style={{fontSize:17}}></i>
          <i className="fa fa-youtube-play" style={{fontSize:17}}></i>
          <i className="fa fa-linkedin" style={{fontSize:17}}></i>
        </div>
        <div id="form">
          <p>
            Sign up to receive email news, promotions, and information about Kohler.
          </p>
          <form action="#">
            <input type="email" name="" placeholder="Email Address" id="" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div>
          <p>Stores</p>
          <ul>
            <li>Kohler Experience Centres</li>
            <li>Find a Store</li>
            <li>Dealership Enquiry</li>
          </ul>
        </div>
        <div>
          <p>Resources</p>
          <ul>
            <li>Careers</li>
            <li>Guides and Lookbooks</li>
            <li>CSR</li>
            <li>Press Room</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <p>Help</p>
          <ul>
            <li>Product Enquiry</li>
            <li>Contact Us</li>
            <li>WhatsApp for Services</li>
            <li>Shipping Policy</li>
            <li>Installations T&C</li>
            <li>Warranty</li>
            <li>Warranty Registration</li>
            <li>How to place a Return</li> 
            <li>Return and Refund Policy</li>           
          </ul>
        </div>
        <div>
          <p>About Us</p>
          <ul>
            <li>150th Anniversary</li>
            <li>Who We Are</li>
            <li>Heritage</li>
            <li>Social Impact</li>
            <li>Sustainability</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-buttons">
        <button
          type="button"
          className="footer_collapsible"
          onClick={() => { collapse_filter(0); }}
        >
          Stores <div className="plus-icon">+</div>
        </button>
        <div className="footer_button_content">
          <ul>
            <li>Kohler Experience Centres</li>
            <li>Find a Store</li>
            <li>Dealership Enquiry</li>
          </ul>
        </div>

        <button
          type="button"
          className=" footer_collapsible"
          onClick={() => { collapse_filter(1); }}
        >
          Resources <div className="plus-icon">+</div>
        </button>
        <div className="footer_button_content">
          <ul>
            <li>Careers</li>
            <li>Guides and Lookbooks</li>
            <li>CSR</li>
            <li>Press Room</li>
            <li>Blog</li>
          </ul>
        </div>

        <button
          type="button"
          className=" footer_collapsible"
          onClick={() => { collapse_filter(2); }}
        >
          Help <div className="plus-icon">+</div>
        </button>
        <div className="footer_button_content">
          <ul>
            <li>Product Enquiry</li>
            <li>Contact Us</li>
            <li>WhatsApp for Services</li>
            <li>Shipping Policy</li>
            <li>Installations T&C</li>
            <li>Warranty</li>
            <li>Warranty Registration</li>
            <li>How to place a Return</li> 
            <li>Return and Refund Policy</li>           
          </ul>
        </div>

        <button
          type="button"
          onClick={() => { collapse_filter(3); }}
          className=" footer_collapsible"
        >
          About Us <div className="plus-icon">+</div>
        </button>
        <div className="footer_button_content">
          <ul>
            <li>150th Anniversary</li>
            <li>Who We Are</li>
            <li>Heritage</li>
            <li>Social Impact</li>
            <li>Sustainability</li>
          </ul>
        </div>
      </div>

      <div className="links">
        <ul className="services">
          <li>Subject Access Request</li>
          <li>Privacy</li>
          <li>Cookies Settings</li>
          <li>Legal</li>
          <li>Site Map</li>
          <li>Terms</li>
          <li>Accessibility</li>
          <li>Grievances</li>
          <li>Disclaimer</li>
        </ul>
        <span className="copyright">&copy; Kohler Co. All Rights Reserved</span>
      </div>
    </div>
  );
}

export default Footer;
