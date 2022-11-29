import selectedVideoReducer from "../selected-video";
import videoListingReducer from "../video-listing";

const state = {
  VideoList: videoListingReducer,
  SelectedVideo: selectedVideoReducer,
};

export const testAppSelector = (f) => f(state);
