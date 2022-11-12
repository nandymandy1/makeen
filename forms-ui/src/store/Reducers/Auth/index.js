import { LOGIN_USER, LOGOUT_USER, SET_AUTH_USER } from "./types";

const initial_auth_state = {
  user: null,
  isAuth: false,
};

const AuthReducer = (state = initial_auth_state, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuth: true,
      };
    case SET_AUTH_USER:
      return {
        ...state,
        user: payload,
      };
    case LOGOUT_USER:
      return initial_auth_state;
    default:
      return state;
  }
};

export default AuthReducer;
