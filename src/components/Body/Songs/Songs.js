import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import React from "react";

import Song from "./Song/Song";
import { UserDataValue } from "../../../Context/userContext";

import "./Songs.css";

const Songs = () => {
  const [{ discover_weekly }] = UserDataValue();

  return (
    <div className="songs">
      <div className="songs__icons">
        <PlayCircleFilled className="songs__shuffle" />
        <Favorite fontSize="large" />
        <MoreHoriz />
      </div>

      {discover_weekly?.tracks.items.map((item) => {
        return <Song track={item.track} />;
      })}
    </div>
  );
};

export default Songs;
