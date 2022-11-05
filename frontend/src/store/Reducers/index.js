import Form from "./Form";
import Auth from "./Auth";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  Auth,
  Form,
});

export default rootReducer;
