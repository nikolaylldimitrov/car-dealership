import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import "./Styles/favoritelist.css";

const FavoriteList = (props) => {
  const { Favorites } = props;
  const recentFavorites = Favorites.slice(-6);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  //const Brands = props.Favorites.slice(-6).map((car) => car.brand);
  return (
    <span className="drop-down">
      <button className="drop-down-btn" onClick={toggleDropdown}>
        Favorite List&#9662;
      </button>
      {isDropdownOpen && (
        <ul className="drop-down-selector">
          {recentFavorites.map((car, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={car.frontpicture} alt={car.brand} />
              {hoveredIndex === index && (
                <span>
                  {car.brand}
                  {car.model}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </span>
  );
};
const mapStateToProps = (state) => {
  return {
    Favorites: state.Favorites?.favorites || [],
  };
};
export default connect(mapStateToProps)(FavoriteList);
