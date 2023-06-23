import React from "react";
import "./Styles/carcard.css";
import { Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { OmitProps } from "antd/es/transfer/ListBody";
import { AddToFav } from "../api/actions/FavoriteActions";
import { useSelector } from "react-redux";

export const CarCard = ({ brand, frontpicture, model, engine, price }) => {
  const dispatch = useDispatch(); // Sending data to store
  // const Favorites = useSelector((state) => state.Favorites);
  // const { favorites } = Favorites;
  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch(AddToFav({ frontpicture, brand, model }));
  };

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
          icon={<HeartOutlined onClick={handleOnClick} />}
        />
      </div>
    </div>
  );
};
