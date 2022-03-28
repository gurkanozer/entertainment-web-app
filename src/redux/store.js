import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import initialStates from "./initialStates";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialStates,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
