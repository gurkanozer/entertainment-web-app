import { GET_MOVIES, GET_MOVIES_FAILED } from "../actionTypes";
import * as API from "../api";

export const getMovies = () => async (dispatch) => {
  try {
    const res = await API.getMovies();
    if (res.status === 200) {
      dispatch({ type: GET_MOVIES, payload: res.data });
    } else if (res.status === 500) {
      dispatch({ type: GET_MOVIES_FAILED });
    }
  } catch (err) {
    console.log(err.message);
  }
};
