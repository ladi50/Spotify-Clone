import React from "react";

import "./Song.css"

const Song = ({ track }) => {
  return (
    <div className="song">
      <img
        className="song__album"
        src={track && track.album.images[0].url}
        alt="album_photo"
      />
      <div className="song__info">
        <h1>{track && track.name}</h1>
        <p>
          {track && track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track && track.album.name}
        </p>
      </div>
    </div>
  );
};

export default Song;
