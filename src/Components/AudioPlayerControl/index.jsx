import { Fragment, useEffect, useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./styles.css";
import AboutSongCurrent from "../AboutSongCurrent";
import FeedbackButton from "../FeedbackButton";
import NextMusics from "../NextMusics";
import Constants from "../../Constants";

const AudioPlayerControl = () => {
  const [musics, setMusics] = useState([]);
  const [songIndexCurrent, setSongIndexCurrent] = useState(0);

  useEffect(() => {
    setMusics(Constants.musics);
  }, []);

  const onNextSong = (event) => {
    console.log("songIndexCurrent::", songIndexCurrent);
    if (songIndexCurrent >= musics.length - 1) {
      setSongIndexCurrent(0);
    } else {
      setSongIndexCurrent(songIndexCurrent + 1);
    }
  };

  const onPreviousSong = (event) => {
    console.log("songIndexCurrent::", songIndexCurrent);
    if (songIndexCurrent <= 0) {
      setSongIndexCurrent(musics.length - 1);
    } else {
      setSongIndexCurrent(songIndexCurrent - 1);
    }
  };

  return (
    <Fragment>
      <div className="player">
        <div id="main-content">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
              <div className="form-group">
                <div className="row">
                  <AboutSongCurrent playlistCurrent={Constants.playlists[1]} />
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                  <AudioPlayer
                    loop={false}
                    autoPlay
                    src={musics.length > 0 ? musics[songIndexCurrent].url : ""}
                    showSkipControls={true}
                    showJumpControls={false}
                    onPlay={(e) => console.log("onPlay")}
                    onEnded={(e) => onNextSong(e)}
                    onClickPrevious={(e) => onPreviousSong(e)}
                    onClickNext={(e) => onNextSong(e)}
                    header={
                      musics.length > 0 ? musics[songIndexCurrent].name : ""
                    }
                    customProgressBarSection={[]}
                    customVolumeControls={[]}
                    customAdditionalControls={[]}
                    customControlsSection={[
                      RHAP_UI.MAIN_CONTROLS,
                      RHAP_UI.CURRENT_TIME,
                      RHAP_UI.PROGRESS_BAR,
                      RHAP_UI.DURATION,
                      RHAP_UI.VOLUME,
                      RHAP_UI.ADDITIONAL_CONTROLS,
                      <div className="row ml-1">
                        <FeedbackButton
                          icon="fas fa-thumbs-up"
                          type="success"
                          messages={Constants.feedbackGood}
                        />
                        <FeedbackButton
                          icon="fas fa-thumbs-down"
                          type="danger"
                          messages={Constants.feedbackBad}
                        />
                      </div>,
                    ]}
                  />
                </div>
              </div>
              <NextMusics title="Próximas Músicas" musics={musics} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AudioPlayerControl;
