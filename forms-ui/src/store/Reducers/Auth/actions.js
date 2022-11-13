import apiClient from "@services";
import { setToken } from "@services/index";
import { AUTH_LOADING, LOGIN_USER, LOGOUT_USER, SET_AUTH_USER } from "./types";

export const loginUser = (user) => async (dispatch) => {
  try {
    dispatch(setAuthLoading(true));
    const { data } = await apiClient.post("/users/api/auth", user);
    console.log({ data });
    dispatch({
      type: LOGIN_USER,
    });
    setToken(data.token);
    dispatch(getAuthUser(data.user));
  } catch (err) {
    console.log("LOGIN_ERR", err);
  } finally {
    dispatch(setAuthLoading(false));
  }
};

export const initApp = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    setToken(token);
    dispatch(getAuthUser());
  } catch (err) {
    console.log("INIT_APP_ERR", err);
  }
};

export const getAuthUser =
  (user = null) =>
  async (dispatch) => {
    try {
      if (user) {
        dispatch({
          payload: user,
          type: SET_AUTH_USER,
        });
        return;
      }

      dispatch(setAuthLoading(true));

      const { data } = await apiClient.get("/users/api/auth");

      dispatch({
        type: LOGIN_USER,
      });

      dispatch({
        payload: data,
        type: SET_AUTH_USER,
      });

      console.log({ data });
    } catch (err) {
      console.log("GET_AUTH_ERR", err);
      dispatch(logoutUser());
    } finally {
      dispatch(setAuthLoading(false));
    }
  };

export const logoutUser = () => (dispatch) => {
  setToken();
  dispatch({
    type: LOGOUT_USER,
  });
};

export const setAuthLoading = (payload) => ({
  type: AUTH_LOADING,
  payload,
});
