const initialStates = {
  movies: [],
  filteredMovies: [],
  // trendingMovies: [],
  // moviesOnly:[],
  // tvSeriesOnly:[],
  auth: {
    token: localStorage.getItem("user_token"),
    isAuthenticated: true,
    user: null,
    isLoading: true,
    bookmarked: [],
  },
};
export default initialStates;
