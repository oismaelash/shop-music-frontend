import { Fragment } from "react";

const PlaylistView = ({ title, list, isSpot }) => {
  const handlePlaylistClicked = (data) => {
    console.log("playlistSelected", data);
    alert(`${isSpot ? data.name : data.title}`);
  };

  return (
    <Fragment>
      <div className="block">
        <h2>{title}</h2>
        <ul className="list" id="moods">
          {list.map((playlist) => (
            <li
              key={playlist.id}
              className="none mood1"
              onClick={() => handlePlaylistClicked(playlist)}
            >
              <span className="music-artist">
                {" "}
                {isSpot ? playlist.name : playlist.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default PlaylistView;
