import {
  VIDEO_LISTING_START,
  VIDEO_LISTING_SUCCESS,
  VIDEO_LISTING_FAIL,
  VIDEO_LISTING_CLEANUP,
} from "../../constant/video-listing";

import { appVideoList } from "../../initials/video-listing";

const videoListingReducer = (state = appVideoList, action) => {
  switch (action.type) {
    case VIDEO_LISTING_START:
      return { ...state, isLoading: true, error: null };
    case VIDEO_LISTING_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
        isSuccessful: true,
        error: null,
      };
    case VIDEO_LISTING_FAIL:
      return { ...state, error: action.payload, isLoading: false };
    case VIDEO_LISTING_CLEANUP:
      return { ...state, error: null, isLoading: false, isSuccessful: false };
    default:
      return state;
  }
};

export default videoListingReducer;
