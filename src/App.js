import "./App.css";
import MyCarousel from "./components/carousel";
import i18n from "./i18n";
import { Translation } from "react-i18next";
import NavBar from "./components/navigation";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./components/aboutus";
import ContactUsPage from "./components/contactus";

function App() {
  return (
    <div className="App">
      <Translation>
        {(t) => (
          <div>
            <NavBar t={t} i18n={i18n} />
            <Routes>
              <Route path="/" element={<MyCarousel />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
            </Routes>
          </div>
        )}
      </Translation>
    </div>
  );
}

export default App;
