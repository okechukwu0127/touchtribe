//
import { combineReducers } from "redux";
import selectedVideoReducer from "./selected-video";
import videoListingReducer from "./video-listing";

const rootCombineReducer = combineReducers({
  VideoList: videoListingReducer,
  SelectedVideo: selectedVideoReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_SESSION") {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return rootCombineReducer(state, action);
};

export default rootReducer;
