import { FILTER_MOVIES } from "../actionTypes";

export const setFilteredMovies = (cat, key, movies) => async (dispatch) => {
  dispatch({ type: FILTER_MOVIES, payload: { cat, key, movies } });
};
