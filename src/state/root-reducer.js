import produce from "immer";
import actions from "./actions";

const rootReducer = (state, action) => {
  switch (action.type) {
    case actions.HYDRATE_VIDEO_DATA:
      return produce(state, (draft) => {
        // eslint-disable-next-line no-param-reassign
        draft.player.videos = action.payload;
      });
    case actions.SELECT_VIDEO:
      return produce(state, (draft) => {
        // eslint-disable-next-line no-param-reassign
        draft.player.videoSelected = action.payload;
      });
    default:
      console.error(`No reducer for action type ${action.type} found.`);
  }
};

export default rootReducer;
