import { Fragment } from "react";
// import { useSelector } from "react-redux";
import { useAppSelector } from "../../store/reducers/mocker/test-redux-hooks";

import { VideoPlayerStyle } from "../../style/video";
import { BoxTitle } from "../../style/resuable";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const { selectedVideo } = useAppSelector((s) => s.SelectedVideo);

  return (
    <>
      <BoxTitle data-title="videoTitle">{selectedVideo?.name}</BoxTitle>

      <VideoPlayerStyle>
        <VideoCard poster={selectedVideo?.thumbnail} videoList={selectedVideo} />
      </VideoPlayerStyle>
    </>
  );
};

export default VideoContainer;
