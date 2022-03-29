import { combineReducers } from "redux";
import filteredMovies from "./filteredMoviesReducer";
import movies from "./moviesReducer";
import auth from "./userReducer";

export default combineReducers({
  filteredMovies,
  movies,
  auth,
});
