import { Fragment } from "react";

const AboutSongCurrent = ({ title, musics }) => {
  return (
    <Fragment>
      <h4 className="next-songs">{title}</h4>
      <ul>
        {musics.map((song) => (
          <li key={song.id}>
            <div className="icon"></div>
            <span className="info-wrapper">
              <span className="music-artist">
                {song.name} - {song.artist}{" "}
              </span>
              {" | "}
              <span className="time">{song.duration}</span>
              {" | "}
              <span className="new">{song.tag}</span>
            </span>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default AboutSongCurrent;
