import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  LOGIN_SUCCESS,
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAILED,
  LOGOUT,
  USER_UPDATED,
} from "../actionTypes";
import initialStates from "../initialStates";
const userReducer = (state = initialStates.auth, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case CREATE_USER_SUCCESS:
    case USER_UPDATED:
      localStorage.setItem("user_token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true,
        bookmarked: action.payload.bookmarked || [],
      };
    case AUTH_ERROR:
    case CREATE_USER_FAILED:
    case LOGIN_FAILED:
    case LOGOUT:
      localStorage.removeItem("user_token");
      return {
        ...state,
        token: null,
        user: null,
        isLoading: false,
        isAuthenticated: false,
        bookmarked: [],
      };
    case USER_LOADING:
      return { ...state, isLoading: true };
    case USER_LOADED:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
export default userReducer;
