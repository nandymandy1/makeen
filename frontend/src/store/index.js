import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./Reducers";
import thunk from "redux-thunk";

const composeEnhancers = composeWithDevTools({});
const middleware = [thunk];

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
