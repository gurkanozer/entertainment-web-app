import {
  CREATE_USER_FAILED,
  CREATE_USER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from "../actionTypes";
import * as API from "../api";

export const login = (data) => async (dispatch) => {
  try {
    const res = await API.login(data);
    if (res.status === 200) {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    }
  } catch (err) {
    if (err.response.status === 500) {
      console.log("error: ", err.response.data);
    } else if (err.response.status === 400) {
      console.log(err.response.data);
    }
    dispatch({ type: LOGIN_FAILED });
  }
};

export const register = (data) => async (dispatch) => {
  try {
    const res = await API.register(data);
    if (res.status === 201) {
      dispatch({ type: CREATE_USER_SUCCESS, payload: res.data });
    }
  } catch (err) {
    dispatch({ type: CREATE_USER_FAILED });
    if (err.response.status === 400) {
      console.log(err.response.data);
    } else if (err.response.status === 412) {
      let data = err.response.data;
      console.log(data.message);
    }
  }
};
