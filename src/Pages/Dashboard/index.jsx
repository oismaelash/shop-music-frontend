import { Fragment, useEffect, useState } from "react";
import "./styles.css";
import Sidebar from "./../../Components/Sidebar";
import AudioPlayerControl from "./../../Components/AudioPlayerControl";
import Constants from '../../Constants';

const Dashboard = () => {

  return (
    <Fragment>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-2 col-lg-2 col-sm-12 col-xs-12">
            <Sidebar playlists={Constants.playlists} spots={Constants.spots} />
          </div>

          <div className="col-md-10 col-lg-10 col-sm-12 col-xs-12">
            <div
              className="card"
              style={{ backgroundColor: "#181818", padding: "10px" }}
            >
              <AudioPlayerControl />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
