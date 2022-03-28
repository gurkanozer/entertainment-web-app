import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  LOGIN_SUCCESS,
} from "../actionTypes";
import initialStates from "../initialStates";
const userReducer = (state = initialStates.user, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case CREATE_USER_SUCCESS:
      localStorage.setItem("user_profile", JSON.stringify(action.payload));
      return action.payload;
    case CREATE_USER_FAILED:
      localStorage.removeItem("user_profile");
      return {};
    default:
      return state;
  }
};
export default userReducer;
