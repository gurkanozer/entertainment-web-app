import initialStates from "../initialStates";

const bookmarkedMoviesReducer = (
  state = initialStates.bookmarkedMovies,
  action
) => {
  switch (action.type) {
    case "GET_BOOKMARKED":
      return state;
    default:
      return state;
  }
};
export default bookmarkedMoviesReducer;
