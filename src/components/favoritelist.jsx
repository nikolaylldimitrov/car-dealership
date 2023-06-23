import React from "react";
import { connect } from "react-redux";

const FavoriteList = (props) => {
  console.log(props);
  const Brands = props.Favorites.map((car) => car.brand).join("--");
  return <div> {Brands} </div>;
};
const mapStateToProps = (state) => {
  return {
    Favorites: state.Favorites?.favorites || [],
  };
};
export default connect(mapStateToProps)(FavoriteList);
