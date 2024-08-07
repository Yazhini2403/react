import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/task1.css";

const Navbar = () => {
  //symatic tags
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preverntDefault();
    console.log("Form submitted: ", formData);
  };

  return (
    /*<nav>
    <li><Link to= '/'>Home</Link></li>
    <li><Link to= '/about'>About</Link></li>
    <li><Link to= '/fun'>FunctionalCompoenent</Link></li>
    <li><Link to= '/comp'>ClassComponent</Link></li>
  </nav>*/
    <div className="contact-div">
      <h2>Contact us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
      <div>
        <label>Full Name:</label>
        <input
          type="text"
          name="fullname "
          value={formData.fullname}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email Address:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Subject:</label>
        <input
          type="textarea"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} className="text-cont"></textarea>
        
        
        
        
        
        
      </div>
      </form >
    </div>

  );
};
export default Navbar;