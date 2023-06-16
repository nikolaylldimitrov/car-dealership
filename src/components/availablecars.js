import React, { Component, useState } from "react";
import carsApi from "../api/api";

const AvailableCars = () => {
  const [cars, setCars] = useState([]);

  carsApi.getCars(setCars);
  if (cars.lenght === 0) {
    return <div>Currently there are no available cars</div>;
  }
  const myCars = cars.map((c) => <div key={c.brand}>{c.brand}</div>);
  return <div> {myCars}</div>;
};

export default AvailableCars;
