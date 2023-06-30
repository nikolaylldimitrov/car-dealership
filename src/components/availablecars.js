import React, { useState } from "react";
import carsApi from "../api/api";
import { CarCard } from "./carcard";
import "./Styles/carcard.css";

const AvailableCars = () => {
  const [cars, setCars] = useState([]);

  carsApi.getCars(setCars);
  if (cars.lenght === 0) {
    return <div>Currently there are no available cars</div>;
  }

  const myCars = cars.map((c) => (
    <div className="carDetail-container" key={c.id}>
      <CarCard
        id={c.id}
        frontpicture={c.frontpicture}
        brand={c.brand}
        model={c.model}
        engine={c.engine}
        price={c.price}
      />
    </div>
  ));

  return <div className="cars-look">{myCars}</div>;
};

export default AvailableCars;
