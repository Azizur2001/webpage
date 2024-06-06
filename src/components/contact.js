import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sd5szqp', 'template_1pwj4km', form.current, 'VshxAyZ4uRBYk-xRN')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Failed to send message, please try again.');
      });
  };

  return (
    <div id="contact" className="section section-padding-top contact-section">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-description">
        I am very passionate about Software Engineering. I love building things and making them my own. Have any questions? Get a hold of me and contact me below!
      </p>
      <div className="contact-content">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Name</label>
          <input type="text" name="from_name" placeholder="Name" required />
          <label>Email</label>
          <input type="email" name="email_id" placeholder="Email" required />
          <label>Message</label>
          <textarea name="message" placeholder="Message" required />
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="additional-contact-info">
  <div className="info-section">
    <h2>Get in touch</h2>
    <p>Email Address:</p>
    <p>rahmanazizur946@gmail.com</p>
  </div>
  <div className="info-barrier"></div> 
  <div className="info-section">
    <h2>Location</h2>
    <p>Currently living in:</p>
    <p>New York/Bronx</p>
  </div>
  <div className="info-barrier"></div> 
  <div className="info-section">
    <h2>Contact Directly</h2>
    <p>Phone Number:</p>
    <p>347-691-0612</p>
  </div>
</div>

  </div>
  );
};

export default Contact;