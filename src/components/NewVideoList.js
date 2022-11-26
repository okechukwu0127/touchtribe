import React, { Fragment, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import {
  Row,
  Column,
  Grid,
  ImgResponsive,
  SideVideoTitle,
  ImageBox,
  LoadingMore,
  LoaderImage,
} from "../style";
import { getVideoListingAction } from "../store/action/video-listing";
import { setectedVideoAction } from "../store/action/selected-video";
import videoData from "../video-data.json";
import useLazyLoad from "../hook/useLazyLoad";
import loader from "../assets/loaderTrans.gif";

const NewVideoList = () => {
  const dispatch = useDispatch();
  const videoList = useSelector((s) => s.VideoList);

  const triggerRef = useRef(null);

  const NUM_OF_IMAGES = 5;
  const TOTAL_PAGES = videoList.list.length / NUM_OF_IMAGES;

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
    dispatch(setectedVideoAction(item));
  };

  return (
    <Grid>
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
                <ImgResponsive src={item.thumbnail} alt={item.name} />
              </ImageBox>
            </Column>
            <Column md="12" sm="7" xs="6">
              <SideVideoTitle>{item.name}</SideVideoTitle>
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

export default NewVideoList;
