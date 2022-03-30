import { combineReducers } from "redux";
import movies from "./moviesReducer";
import auth from "./userReducer";
import filteredMovies from "./filteredMoviesReducer";
import systemMessages from "./systemMessagesReducer";
export default combineReducers({
  movies,
  filteredMovies,
  systemMessages,
  auth,
});
