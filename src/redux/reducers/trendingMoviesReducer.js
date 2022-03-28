import { FILTER_MOVIES } from "../actionTypes";
import initialStates from "../initialStates";

const filteredMoviesReducer = (
  state = initialStates.filteredMovies,
  action
) => {
  switch (action.type) {
    case FILTER_MOVIES:
      return state;
    default:
      return state;
  }
};
export default filteredMoviesReducer;
