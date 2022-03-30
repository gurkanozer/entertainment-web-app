import { MESSAGE_RENDERED } from "../actionTypes";

export const isRendered = (message) => (dispatch) => {
  dispatch({
    type: MESSAGE_RENDERED,
    payload: { ...message, isRendered: true },
  });
};
