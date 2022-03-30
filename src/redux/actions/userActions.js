import {
  CREATE_USER_FAILED,
  CREATE_USER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  AUTH_FAILED,
  LOGOUT,
  USER_UPDATED,
  ADD_MESSAGE,
} from "../actionTypes";
import * as API from "../api";

export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOADING });
    const res = await API.login(data);
    if (res.status === 200) {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      dispatch({ type: USER_LOADED });
    }
  } catch (err) {
    if (err.response.status === 500) {
      console.log("error: ", err.response.data);
    } else if (err.response.status === 400) {
      const errorMessage = {
        type: "login_error",
        message: err.response.data.data,
      };
      dispatch({ type: ADD_MESSAGE, payload: errorMessage });
    }
    dispatch({ type: LOGIN_FAILED });
  }
};

export const signUp = (data) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOADING });
    const res = await API.register(data);
    if (res.status === 201) {
      dispatch({ type: CREATE_USER_SUCCESS, payload: res.data });
      dispatch({ type: USER_LOADED });
    }
  } catch (err) {
    dispatch({ type: CREATE_USER_FAILED });
    if (err.response.status === 400) {
      console.log(err.response.data);
      const errorMessage = {
        type: "register_error",
        message: err.response.data.message,
      };
      dispatch({ type: ADD_MESSAGE, payload: errorMessage });
    } else if (err.response.status === 412) {
      let data = err.response.data;
      console.log(data.message);
      const errorMessage = {
        type: "register_error",
        message: err.response.data.message,
      };
      dispatch({ type: ADD_MESSAGE, payload: errorMessage });
    }
  }
};

export const isAuth = () => async (dispatch) => {
  const token = localStorage.getItem("user_token");
  try {
    if (!token) dispatch({ type: AUTH_ERROR });
    else {
      const { data } = await API.isAuth({ token });
      dispatch({ type: LOGIN_SUCCESS, payload: data });
      dispatch({ type: USER_LOADED });
    }
  } catch (err) {
    console.log(err.response);
    dispatch({ type: AUTH_FAILED });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT });
  } catch (err) {
    console.log(err);
  }
};

export const toggleBookmark = (bookmarked) => async (dispatch) => {
  try {
    const res = await API.bookmark({ bookmarked });
    if (res.status === 201) {
      dispatch({
        type: USER_UPDATED,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
