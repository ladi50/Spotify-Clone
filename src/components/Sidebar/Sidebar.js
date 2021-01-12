import React from "react";
import { Home, Search, LibraryMusic } from "@material-ui/icons";

import SideBarOption from "./SideBarOption/SideBarOption";
import { UserDataValue } from "../../Context/userContext";

import "./Sidebar.css";

const Sidebar = () => {
  const [{ playlists }] = UserDataValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify-logo"
        height="70"
      />
      <SideBarOption Icon={Home} title="Home" />
      <SideBarOption Icon={Search} title="Search" />
      <SideBarOption Icon={LibraryMusic} title="Your Library" />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items &&
        playlists.items.map((playlist) => {
          return <SideBarOption key={playlist.id} title={playlist.name} />;
        })}
    </div>
  );
};

export default Sidebar;
