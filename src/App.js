import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import Login from "./components/Login/Login";
import Player from "./components/Player/Player";
import { getTokenFromUrl } from "./utils/spotify";
import { UserDataValue } from "./Context/userContext";

const spotify = new SpotifyWebApi();

const App = () => {
  const [{ user, token }, dispatch] = UserDataValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const token = hash.access_token;
    if (token) {
      dispatch({
        type: "SET_TOKEN",
        token
      });

      spotify.setAccessToken(token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists
        });
      });

      spotify.getPlaylist("37i9dQZF1DX1vSJnMeoy3V").then((res) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: res
        });
      });
    }
  }, [token, dispatch, user]);

  return <div>{token ? <Player spotify={spotify} /> : <Login />}</div>;
};

export default App;
