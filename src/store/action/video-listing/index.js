import {
  VIDEO_LISTING_START,
  VIDEO_LISTING_SUCCESS,
  VIDEO_LISTING_FAIL,
  // VIDEO_LISTING_CLEANUP,
} from "../../constant/video-listing";

const fetchVideoStart = () => {
  return { type: VIDEO_LISTING_START };
};
const fetchVideoSuccessfull = (payload) => {
  return { type: VIDEO_LISTING_SUCCESS, payload };
};

const fetchVideoFail = (payload) => {
  return { type: VIDEO_LISTING_FAIL, payload };
};

export const getVideoListingAction = (payload) => {
  return async (dispatch) => {
    dispatch(fetchVideoStart());

    const sortedVideoList = payload.sort((aa, bb) => {
      const a = aa.name.toLowerCase();
      const b = bb.name.toLowerCase();

      let output = 0;
      if (a < b) {
        output = -1;
      } else if (a > b) {
        output = 1;
      }

      return output;
    });

    if (Object.keys(payload).length > 0) {
      dispatch(fetchVideoSuccessfull(sortedVideoList));
    } else {
      dispatch(fetchVideoFail("empty"));
    }
  };
};
