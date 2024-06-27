import React, { useState } from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "69f97cf5-2589-40c7-9feb-66ab6dd7dae3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Write to Us <img src={msg_icon} alt="" /></h3>
        <p>We would love to hear from you! Whether you have a question about 
          our services, need assistance, or want to provide feedback, feel 
          free to reach out. Our team is here to help and ensure you have 
          the best experience possible. Contact us today via phone, email, 
          or the contact form below, and we'll get back to you promptly.</p>
        <ul>
          <li><img src={mail_icon} alt="" />Info@WorthIT.com</li>
          <li><img src={phone_icon} alt="" />+9779818236152</li>
          <li><img src={location_icon} alt="" />Itahari-4, Sunsari, Nepal</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type='text' name='name' placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='Enter your phone number' required />
          <label>Write your message here</label>
          <textarea name='message' rows={6} placeholder='Enter your message' required></textarea>
          <button type='submit' className='blue'>Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
