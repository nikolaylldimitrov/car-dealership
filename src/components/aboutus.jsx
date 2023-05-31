import React from "react";
import NavBar from "./navigation";
import i18n from "../i18n";
import { Translation } from "react-i18next";
import "./Styles/aboutus.css";

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-title">
        <h1>About Us</h1>
      </div>
      <div className="content-divider"></div>
      <div className="about-us-first">
        <p>
          Welcome to Nikos Auto, your premier destination for quality vehicles
          and exceptional customer service. With years of experience in the
          automotive industry, we take pride in offering a wide selection of
          cars, trucks, and SUVs to suit every budget and lifestyle.
        </p>
      </div>
      <div className="about-us-second-htwo">
        {" "}
        <h2>Our Mission</h2>{" "}
      </div>
      <div className="about-us-second">
        <div classname="paragraph-two">
          <p>
            At Nikos Auto, our mission is to provide our customers with the best
            car-buying experience possible. We strive to exceed your
            expectations by offering a transparent and hassle-free process,
            top-notch vehicles, and personalized customer service. We believe in
            building long-term relationships with our customers based on trust,
            integrity, and mutual respect.
          </p>
        </div>
        <div className="paragraph-two-image">
          <img
            src="https://www.albayrakmelamin.com/files/misyon.jpg"
            alt="our-mission"
          ></img>
        </div>
      </div>

      <div className="about-us-third">
        <div className="about-us-hthree">
          <h3>Our Team</h3>
        </div>
        <p>
          We have a dedicated team of automotive professionals who are
          passionate about helping you find the perfect vehicle. Our
          knowledgeable sales staff is here to guide you through the entire
          process, from browsing our inventory to financing options. We also
          have skilled technicians in our service department who will ensure
          that your vehicle stays in top condition.
        </p>
      </div>
      <h2>Wide Selection of Vehicles</h2>
      <p>
        At Nikos Auto, we offer a diverse range of vehicles from various makes
        and models. Whether you're looking for a sleek sedan, a spacious SUV, or
        a powerful truck, we have something to suit your needs. Our inventory is
        carefully curated to provide you with reliable and high-quality vehicles
        that you can trust.
      </p>

      <h2>Customer Satisfaction</h2>
      <p>
        Your satisfaction is our utmost priority. We understand that buying a
        car is a significant investment, and we want to ensure that you're
        completely satisfied with your purchase. Our friendly and professional
        staff will assist you throughout the process, answering your questions,
        addressing your concerns, and helping you make an informed decision.
      </p>

      <h2>Visit Us Today</h2>
      <p>
        We invite you to visit our dealership and experience the Nikos Auto for
        yourself. Our showroom is conveniently located, and our team is ready to
        assist you. Whether you're in the market for a new car or need reliable
        service for your current vehicle, we're here to help. Thank you for
        considering Nikos Auto as your trusted automotive partner.
      </p>
    </div>
  );
};

export default AboutUsPage;
