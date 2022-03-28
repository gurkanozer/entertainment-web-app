const initialStates = {
  movies: [],
  filteredMovies: [],
  bookmarkedMovies: [],
  // trendingMovies: [],
  // moviesOnly:[],
  // tvSeriesOnly:[],
  user: localStorage.getItem("user_profile") || {},
};
export default initialStates;
