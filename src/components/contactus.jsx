import React from "react";
import NavBar from "./navigation";
import i18n from "../i18n";
import { Translation } from "react-i18next";
const ContactUsPage = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you! Whether you have a question, need
        assistance, or want to schedule a test drive, our team is here to help.
        Get in touch with us using the contact information below or fill out the
        form, and we'll get back to you as soon as possible.
      </p>

      <h2>Contact Information</h2>
      <p>
        <strong>Nikos Auto</strong>
      </p>
      <p>
        <strong>Address:</strong> 5 Chesterton Terrace, London, E13 0DG{" "}
      </p>
      <p>
        <strong>Phone:</strong> (44) 456-7890
      </p>
      <p>
        <strong>Email:</strong> info@nikosauto.com
      </p>

      <h2>Send us a Message</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUsPage;
