import React from "react";
import {
  PlayCircleOutline,
  SkipPrevious,
  Shuffle,
  Repeat,
  PlaylistPlay,
  VolumeDown,
  SkipNext
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="data:image/jpeg;base64,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"
          alt="album_cover"
          width="60"
        />
        <div className="footer__songInfo">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline className="footer__icon" fontSize="large" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
