import { Fragment } from "react";

const AboutSongCurrent = ({ playlistCurrent }) => {
  return (
    <Fragment>
      <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
        <img className="img-album" src={playlistCurrent.coverurl}></img>
      </div>
      <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
        <label>Playlist Atual</label>
        <br></br>
        <h2>{playlistCurrent.title}</h2>
        <p>{playlistCurrent.description}</p>
      </div>
    </Fragment>
  );
};

export default AboutSongCurrent;
