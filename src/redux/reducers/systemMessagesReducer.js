import { ADD_MESSAGE, CLEAR_MESSAGE, MESSAGE_RENDERED } from "../actionTypes";
import initialStates from "../initialStates";
const systemMessagesReducer = (
  state = initialStates.systemMessages,
  action
) => {
  switch (action.type) {
    case ADD_MESSAGE:
    case MESSAGE_RENDERED:
      if (state.length === 0) {
        return [action.payload];
      }
      const stateAfterUpdate = state.map((s) => {
        if (s.type === action.payload.type) return action.payload;
        return s;
      });
      return stateAfterUpdate;
    case CLEAR_MESSAGE:
      return state.filter((s) => s.type === action.payload.type);
    default:
      return state;
  }
};

export default systemMessagesReducer;
