import { combineReducers } from "redux";
import filteredMovies from "./filteredMoviesReducer";
import movies from "./moviesReducer";
import user from "./userReducer";
import bookmarkedMovies from "./bookmarkedMoviesReducer";

export default combineReducers({
  filteredMovies,
  movies,
  user,
  bookmarkedMovies,
});
