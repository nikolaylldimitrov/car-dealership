import React from "react";
import "./Styles/carcard.css";
import { Button } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { AddToFav, RemoveFav } from "../api/actions/FavoriteActions";
import { useSelector } from "react-redux";

export const CarCard = ({ id, brand, frontpicture, model, engine, price }) => {
  const dispatch = useDispatch(); // Sending data to store
  // const Favorites = useSelector((state) => state.Favorites);
  // const { favorites } = Favorites;
  const isFavorite = useSelector((state) => {
    return state.Favorites.favorites.filter((f) => f.id === id)[0];
  });

  const handleOnClick = (e) => {
    e.preventDefault();
    if (isFavorite) {
      dispatch(RemoveFav({ id }));
    } else {
      dispatch(AddToFav({ id, frontpicture, brand, model }));
    }
  };

  const favoriteIcon = isFavorite ? <HeartFilled /> : <HeartOutlined />;
  return (
    <div className="car-card">
      <img src={frontpicture} alt={model} />{" "}
      <div className="detail-wrapper">
        <h3>
          {brand} {model}
        </h3>
        <small>Engine: {engine}</small>
        <h4>Price: {price}</h4>
        <button className="details-btn">Details</button>
        <Button
          type="normal"
          shape="round"
          icon={favoriteIcon}
          onClick={handleOnClick}
        />
      </div>
    </div>
  );
};
