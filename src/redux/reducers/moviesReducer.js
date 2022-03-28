import { GET_MOVIES, GET_MOVIES_FAILED } from "../actionTypes";
import initialStates from "../initialStates";
const moviesReducer = (state = initialStates.movies, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return action.payload;
    case GET_MOVIES_FAILED:
      return [];
    default:
      return state;
  }
};
export default moviesReducer;
