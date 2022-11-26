import {
  SELECTED_VIDEO_FAIL,
  SELECTED_VIDEO_SUCCESS,
} from "../../constant/selected-video";

const selectVideoSuccessfull = (payload) => {
  return { type: SELECTED_VIDEO_SUCCESS, payload };
};

const selectVideoFail = (payload) => {
  return { type: SELECTED_VIDEO_FAIL, payload };
};

export const setectedVideoAction = (payload) => {
  return async (dispatch) => {
    if (Object.keys(payload).length > 0) {
      dispatch(selectVideoSuccessfull(payload));
    } else {
      dispatch(selectVideoFail("empty"));
    }
  };
};
