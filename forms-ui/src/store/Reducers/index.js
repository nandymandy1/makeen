import { combineReducers } from "redux";
import Auth, { initial_auth_state } from "./Auth";
import { LOGOUT_USER } from "./Auth/types";
import Form, { initial_form_state } from "./Form";

const appReducer = combineReducers({
  Auth,
  Form,
});

const initialState = appReducer(initial_auth_state, initial_form_state);

const rootReducer = (state, { type, payload }) => {
  if (type === LOGOUT_USER) {
    state = initialState;
  }
  return appReducer(state, { type, payload });
};

export default rootReducer;
