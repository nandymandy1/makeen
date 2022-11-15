import { combineReducers } from "redux";
import Auth from "./Auth";
import { LOGOUT_USER } from "./Auth/types";
import Form from "./Form";

const appReducer = combineReducers({
  Auth,
  Form,
});

const initialState = appReducer({}, {});

const rootReducer = (state, { type, payload }) => {
  if (type === LOGOUT_USER) {
    state = initialState;
  }
  return appReducer(state, { type, payload });
};

export default rootReducer;
