import { FILTER_MOVIES } from "../actionTypes";
import initialStates from "../initialStates";
const fixedData = (data) => {
  return data.trim().toLowerCase();
};
const filteredMoviesReducer = (
  state = initialStates.filteredMovies,
  action
) => {
  switch (action.type) {
    case FILTER_MOVIES:
      let fm = [];
      let cat = action.payload.cat;
      let keyWord = action.payload.key;
      let movies = action.payload.movies;
      if (cat !== "all") fm = movies.filter((m) => m.category === cat);
      else fm = movies;
      if (fixedData(keyWord) !== "") {
        fm = fm.filter(
          (m) => fixedData(m.title).indexOf(fixedData(keyWord)) > -1
        );
      }
      return fm;
    default:
      return state;
  }
};
export default filteredMoviesReducer;
