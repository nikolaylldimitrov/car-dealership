import { React, useState } from "react";
import "./Styles/contactus.css";
import MapsGoogle from "./googlemaps";
import carsApi from "../api/api";

const ContactUsPage = () => {
  const [formSubmited, setFormSubmited] = useState(false);
  const onFormSubmit = (event) => {
    event.preventDefault();

    const target = event.target;
    const formData = new FormData(target);
    carsApi.postSubmitForm(formData, setFormSubmited);
  };
  return (
    <div className="contact-us contact-uscontent">
      <div className="contact-us-title">
        <h1>Contact Us</h1>
      </div>
      <div className="content-divider"></div>
      <div className="contact-us-first">
        <p>
          We would love to hear from you! Whether you have a question, need
          assistance, or want to schedule a test drive, our team is here to
          help. Get in touch with us using the contact information below or fill
          out the form, and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="contact-us-contact-information contact-uscontent">
        <h2>Contact Information</h2>
      </div>
      <div className="address-container contact-uscontent">
        <div className="address-details contact-uscontent">
          <h3>
            <strong>Nikos Auto</strong>
          </h3>
          <p>
            <strong>Address:</strong> 5 Chesterton Terrace, London, E13 0DG{" "}
          </p>
          <p>
            <strong>Phone:</strong> (44) 456-7890
          </p>
          <p>
            <strong>Email:</strong> info@nikosauto.com
          </p>
          {!formSubmited && (
            <form onSubmit={onFormSubmit}>
              <div className="form-element">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-element">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-element">
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form-message">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          )}
          {formSubmited && (
            <div className="submitform-s">
              <p>Thank you we will contact you shortly!</p>
              🙂
            </div>
          )}
        </div>
        <div className="map-container contact-uscontent">
          <MapsGoogle />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
