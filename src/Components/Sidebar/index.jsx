import { Fragment } from "react";
import "./styles.css";
import PlaylistView from "../PlaylistView";

const Sidebar = ({ playlists, spots }) => {
  return (
    <Fragment>
      <div className="player">
        <div id="side-bar">
          <img
            className="logo"
            src="https://bananas.mus.br/img/bananas-music-branding.svg"
          />
          <PlaylistView title="Playlists" list={playlists} isSpot={false} />
          <PlaylistView title="Spots Comerciais" list={spots} isSpot={true} />
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
