import React, { useEffect, useState } from "react";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
} from "video-react";

import _get from "lodash/get";
import { Grid } from "../../style/resuable";
import HLSSource from "./HLSSource";

const VideoCard = ({ poster, videoList }) => {
  const [videoSource, setVideoSource] = useState(null);

  useEffect(() => {
    setVideoSource(_get(videoList, `path`, ""));
  }, [poster, videoSource, videoList]);

  return (
    <>
      <Grid>
        <Player poster={poster} autoPlay videoHeight={500}>
          <HLSSource isVideoChild src={videoSource} />
          <ControlBar>
            <ReplayControl seconds={10} order={1.1} />
            <ForwardControl seconds={30} order={1.2} />
            <CurrentTimeDisplay order={4.1} />
            <TimeDivider order={4.2} />
            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
            <VolumeMenuButton disabled />
          </ControlBar>
        </Player>
      </Grid>
    </>
  );
};

export default VideoCard;
