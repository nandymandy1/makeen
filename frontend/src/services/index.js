import axios from "axios";
import { baseURL } from "@constants";

const apiClient = axios.create({
  baseURL,
});

export const setToken = (token) => {
  if (!token) {
    localStorage.removeItem("token");
    delete apiClient.defaults.headers["Authorization"];
  } else {
    localStorage.setItem("token", token);
    apiClient.defaults.headers["Authorization"] = `Bearer ${token}`;
  }
};

export default apiClient;
