import { AUTH_LOADING, LOGIN_USER, LOGOUT_USER, SET_AUTH_USER } from "./types";

export const initial_auth_state = {
  user: null,
  isAuth: false,
  authLoading: false,
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
    case AUTH_LOADING:
      return {
        ...state,
        authLoading: payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
