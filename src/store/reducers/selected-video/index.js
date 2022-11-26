import {
  SELECTED_VIDEO_START,
  SELECTED_VIDEO_SUCCESS,
  SELECTED_VIDEO_FAIL,
  SELECTED_VIDEO_CLEANUP,
} from "../../constant/selected-video";

import { selectedVideo } from "../../initials/selected-video";

const selectedVideoReducer = (state = selectedVideo, action) => {
  switch (action.type) {
    case SELECTED_VIDEO_START:
      return { ...state, isLoading: true, error: null };
    case SELECTED_VIDEO_SUCCESS:
      return {
        ...state,
        selectedVideo: action.payload,
        isLoading: false,
        isSuccessful: true,
        error: null,
      };
    case SELECTED_VIDEO_FAIL:
      return { ...state, error: action.payload, isLoading: false };
    case SELECTED_VIDEO_CLEANUP:
      return { ...state, error: null, isLoading: false, isSuccessful: false };
    default:
      return state;
  }
};

export default selectedVideoReducer;
