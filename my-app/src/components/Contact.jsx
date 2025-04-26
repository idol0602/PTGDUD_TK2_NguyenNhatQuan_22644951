import React from 'react';
 import '../css/Contact.css';
 

 function Contact() {
  return (
  <div className="contact-container">
  <h2>Contact Us</h2>
  <form className="contact-form">
  <div className="form-group">
  <label htmlFor="name">Name</label>
  <input type="text" id="name" name="name" required />
  </div>
  <div className="form-group">
  <label htmlFor="email">Email</label>
  <input type="email" id="email" name="email" required />
  </div>
  <div className="form-group">
  <label htmlFor="message">Message</label>
  <textarea id="message" name="message" rows="4" required></textarea>
  </div>
  <button type="submit">Send Message</button>
  </form>
  </div>
  );
 }
 

 export default Contact;