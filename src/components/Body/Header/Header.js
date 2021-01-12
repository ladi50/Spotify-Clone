import React from "react";
import { Search } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

import { UserDataValue } from "../../../Context/userContext";

import "./Header.css";

const Header = () => {
  const [{ user }] = UserDataValue();
  
  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input
          type="text"
          placeholder="Search for Artists, Songs, or Podcasts"
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user && user.display_name} />
        <h4>{user && user.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
