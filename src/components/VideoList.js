import React from "react";
import styled from "styled-components";
import actions from "../state/actions";
import VideoThumbnail from "./VideoThumbnail";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function VideoList({ dispatch, videos }) {
  return (
    <Wrapper>
      {videos.slice(0, 3).map((video, i) => {
        return (
          <VideoThumbnail
            dispatch={dispatch}
            key={`${video.name}-thumbnail`}
            name={video.name}
            onClick={() => {
              dispatch({ type: actions.SELECT_VIDEO, payload: i });
            }}
            src={video.thumbnail}
          />
        );
      })}
    </Wrapper>
  );
}
