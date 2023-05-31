import React from "react";
import "./Styles/navbar.css";
import logo from "./images/carlogo4.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

function NavBar({ t, i18n }) {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang === "en" ? "de" : "en");
  };
  const nextLanguage = i18n.language === "EN" ? "DE" : "EN";
  return (
    <header>
      <img src={logo} className="weblogo" alt="carlogo" />
      <nav ref={navRef}>
        <Link to="/">{t("Home")} </Link>
        <Link to="/about-us">{t("About")}</Link>
        <Link to="/">
          {t("Available")} {t("Cars")}
        </Link>
        <Link to="/contact-us">
          {t("Contact")} {t("Us")}
        </Link>
        <button
          className="nav-lang-button"
          onClick={() => changeLanguage(i18n.language)}
        >
          {nextLanguage}
        </button>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
