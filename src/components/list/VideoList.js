import React, { Fragment, useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import clsx from "clsx";
import {
  useAppDispatch,
  useAppSelector,
} from "../../store/reducers/mocker/test-redux-hooks";

import {
  ImgResponsive,
  SideVideoTitle,
  ImageBox,
  LoadingMore,
  LoaderImage,
  UpNext,
} from "../../style/video";

import { Row, Column, Grid } from "../../style/resuable";
import { getVideoListingAction } from "../../store/action/video-listing";
import { setectedVideoAction } from "../../store/action/selected-video";
import videoData from "../../video-data.json";
import useLazyLoad from "../../hook/useLazyLoad";
import loader from "../../assets/loaderTrans.gif";

const VideoList = () => {
  const dispatch = useAppDispatch();
  const videoList = useAppSelector((s) => s.VideoList);

  const triggerRef = useRef(null);

  const NUM_OF_IMAGES = 5;
  const TOTAL_PAGES = Object.prototype.hasOwnProperty.call(videoList, "list")
    ? videoList?.list.length / NUM_OF_IMAGES + 1
    : 0;

  const onGrabData = (currentPage) => {
    return new Promise((resolve) => {
      if (currentPage <= TOTAL_PAGES) {
        setTimeout(
          () => {
            const data = videoList.list.slice(
              ((currentPage - 1) % TOTAL_PAGES) * NUM_OF_IMAGES,
              NUM_OF_IMAGES * (currentPage % TOTAL_PAGES)
            );

            resolve(data);
          },
          currentPage <= TOTAL_PAGES ? 3000 : 0
        );
      } else {
        return [];
      }
    });
  };

  const { data, loading, currentPage } = useLazyLoad({
    triggerRef,
    onGrabData,
  });

  useEffect(() => {
    async function loadJsonVideo() {
      const { videos } = videoData;
      dispatch(getVideoListingAction(videos));
    }
    loadJsonVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const TriggerSeletedVideo = (item) => {
    // window.scrollTo(0, 0);
    // console.log(item);
    dispatch(setectedVideoAction(item));
  };

  return (
    <Grid>
      <UpNext> Up Next</UpNext>
      <Row>
        {data.map((item) => (
          <Fragment key={item.thumbnail}>
            <Column
              md="12"
              sm="5"
              xs="6"
              onClick={() => TriggerSeletedVideo(item)}
            >
              <ImageBox>
                <Link to={`/${decodeURIComponent(item.name)}`}>
                  <ImgResponsive src={item.thumbnail} alt={item.name} />
                </Link>
              </ImageBox>
            </Column>
            <Column
              md="12"
              sm="7"
              xs="6"
              onClick={() => TriggerSeletedVideo(item)}
            >
              <SideVideoTitle data-control="videoCard">
                <Link to={`/${decodeURIComponent(item.name)}`}>
                  {item.name}
                </Link>
              </SideVideoTitle>
            </Column>
          </Fragment>
        ))}
      </Row>
      {currentPage <= TOTAL_PAGES ? (
        <LoadingMore
          ref={triggerRef}
          className={clsx("trigger", {
            visible: loading,
          })}
        >
          <LoaderImage src={loader} alt="loader" width={20} />
        </LoadingMore>
      ) : null}
    </Grid>
  );
};

export default VideoList;
