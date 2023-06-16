import MyCarousel from "./components/carousel";
import i18n from "./i18n";
import { Translation } from "react-i18next";
import NavBar from "./components/navigation";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./components/aboutus";
import ContactUsPage from "./components/contactus";
import AvailableCars from "./components/availablecars";

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
              <Route path="/available-cars" element={<AvailableCars />} />
            </Routes>
          </div>
        )}
      </Translation>
    </div>
  );
}

export default App;
