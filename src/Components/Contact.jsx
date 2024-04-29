// Contact.js
import React from "react";
import "../Style/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Page</h2>
      <p>
        Feel free to reach out to us with any questions or concerns. We are here
        to assist you!
      </p>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your email" />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here"
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
