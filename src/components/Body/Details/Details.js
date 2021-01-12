import React from "react";

import { UserDataValue } from "../../../Context/userContext";

import "./Details.css";

const Details = () => {
  const [{ discover_weekly }] = UserDataValue();

  return (
    <div className="details">
      <img src={discover_weekly?.images[0]?.url} alt="discover_weekly" />
      <div className="details__text">
        <strong>PLAYLIST</strong>
        <h2>Discover Weekly</h2>
        <p>{discover_weekly?.description}</p>
      </div>
    </div>
  );
};

export default Details;
