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
      <div className="content-divider about-uscontent"></div>
      <div className="about-us-first about-uscontent">
        <p>
          Welcome to Nikos Auto, your premier destination for quality vehicles
          and exceptional customer service. With years of experience in the
          automotive industry, we take pride in offering a wide selection of
          cars, trucks, and SUVs to suit every budget and lifestyle.
        </p>
      </div>
      <div className="about-us-second-htwo ">
        {" "}
        <h2>Our Mission</h2>{" "}
      </div>
      <div className="about-us-second about-uscontent">
        <div className="paragraph-two about-uscontent">
          <p>
            At Nikos Auto, our mission is to provide our customers with the best
            car-buying experience possible. We strive to exceed your
            expectations by offering a transparent and hassle-free process,
            top-notch vehicles, and personalized customer service. We believe in
            building long-term relationships with our customers based on trust,
            integrity, and mutual respect.
          </p>
        </div>
        <div className="paragraph-two-image about-uscontent">
          <img
            src="https://www.diabetes.co.uk/wp-content/uploads/2022/10/mission.jpg"
            alt="our-mission"
          ></img>
        </div>
      </div>
      <div className="about-us-hthree">
        <h2>Our Team</h2>
      </div>
      <div className="about-us-third about-uscontent">
        <div className="paragraph-three-image about-uscontent">
          <img
            src="https://cdn.dribbble.com/users/4328335/screenshots/18216753/media/a902e78d6c7f978d553faa267d688d27.png?compress=1&resize=1000x750&vertical=top"
            alt="our-team"
          ></img>
        </div>
        <div className="paragraph-three about-uscontent">
          <p>
            We have a dedicated team of automotive professionals who are
            passionate about helping you find the perfect vehicle passionate
            about helping you find the perfect vehicle. Our knowledgeable sales
            staff is here to guide you through the entire process, from browsing
            our inventory to financing options. We also have skilled technicians
            in our service department who will ensure that your vehicle stays in
            top condition.
          </p>
        </div>
      </div>

      <div className="about-us-hfour ">
        <h2>Wide Selection of Vehicles</h2>
      </div>
      <div className="about-us-fourth about-uscontent">
        <div className="paragraph-four about-uscontent">
          <p>
            At Nikos Auto, we offer a diverse range of vehicles from various
            makes and models. Whether you're looking for a sleek sedan, a
            spacious SUV, or a powerful truck, we have something to suit your
            needs. Our inventory is carefully curated to provide you with
            reliable and high-quality vehicles that you can trust.
          </p>
        </div>
        <div className="paragraph-four-image about-uscontent">
          <img
            src="https://dcdws.blob.core.windows.net/dws-6606308-31419-media/sites/31419/2022/02/Post-3-6206c6479735c-w1024.png"
            alt="Wide-selection-of-vehicles"
          ></img>
        </div>
      </div>
      <div className="about-us-hfive">
        <h2>Customer Satisfaction</h2>
      </div>
      <div className="about-us-fifth about-uscontent">
        <div className="paragraph-five-image about-uscontent">
          <img
            src="https://www.wipotec.com/fileadmin/news/2021/kundenzufriedenheitsumfrage-bei-wipotec.jpg"
            alt="satisfaction"
          ></img>
        </div>
        <div className="paragraph-five about-uscontent">
          <p>
            Your satisfaction is our utmost priority. We understand that buying
            a car is a significant investment, and we want to ensure that you're
            completely satisfied with your purchase. Our friendly and
            professional staff will assist you throughout the process, answering
            your questions, addressing your concerns, and helping you make an
            informed decision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
