import React, { useState } from 'react';
import './contactform.css';
import Particle from "../Particle";
import laptopImg from "../../Assets/img3.png";
import emailjs from 'emailjs-com';

const ContactUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [interests, setInterests] = useState([]);

  const handleInterestChange = (e) => {
    const selectedInterests = Array.from(e.target.selectedOptions, (option) => option.value);
    setInterests(selectedInterests);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.init('8OLd2w77L6VhFno_h');
    const ate_params = {
      to_name: name,
      from_name: email,
      from_email: email,
      message: description,
      interest: interests,
      phone: phone,
    };
    emailjs.send('service_1nxcr9f', 'template_3qygopp', ate_params)
      .then((response) => {
        alert('Mail Send Successfully');
        console.log('Email sent!', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
    // Perform form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Description:', description);
    console.log('Interests:', interests);
    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setDescription('');
    setInterests([]);
  };

  return (
    <div className="contact-us-page">
      <div className="two-column-layout">
        <div className="left-section">
          <img src={laptopImg} alt="about" className="img-fluid" />

        </div>
        <div className="right-section">
          <div className="contact-us-page__content">
            <h1>GET IN TOUCH</h1>
            <p>Looking for a creative and impactful solution for your brand? We would love to hear about it.</p>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, marginRight: '10px' }}>
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      placeholder='Name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    {/* <label htmlFor="name">Name</label> */}
                  </div>
                </div>
                <div style={{ flex: 1, marginLeft: '10px' }}>
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      placeholder='Email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    {/* <label htmlFor="email">Email</label> */}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, marginRight: '10px' }}>
                  <div className="form-group">
                    <input
                      type="tel"
                      id="phone"
                      placeholder='Phone'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                    {/* <label htmlFor="phone">Phone</label> */}
                  </div>
                </div>
                <div style={{ flex: 1, marginLeft: '10px' }}>
                  <div className="form-group">
                    {/* <label htmlFor="interests">Interests</label> */}
                    <select
                      id="interests"
                      // multiple
                      value={interests}
                      onChange={handleInterestChange}
                      required
                    >
                      <option value="">Service Desired</option>
                      <option value="Logo & Branding">Logo & Branding</option>
                      <option value="Print Design Services">Print Design Services</option>
                      <option value="Graphic Design Services">Graphic Design Services</option>
                      <option value="Art & Illustration">Art & Illustration</option>
                      <option value="UI/UX Services">UI/UX Services</option>
                      <option value="Web Design & Development">Web Design & Development</option>
                      <option value="Content Creation & Strategy">Content Creation & Strategy</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  id="description"
                  value={description}
                  placeholder='Your Message'
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
                {/* <label htmlFor="description">Your Message</label> */}
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, marginRight: '10px', textAlign: 'center' }}>
                  <button type="submit">Submit</button>
                </div>
              </div>
            </form>
            <Particle />

          </div>
        </div>
      </div>


    </div>
  );
};

export default ContactUsPage;
