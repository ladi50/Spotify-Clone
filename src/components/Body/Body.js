import React from "react";

import Header from "./Header/Header";
import Details from "./Details/Details";
import Songs from "./Songs/Songs";

import "./Body.css";

const Body = ({ spotify }) => {
  return (
    <div className="body">
      <Header spotify={spotify} />

      <Details />

      <Songs />
    </div>
  );
};

export default Body;
