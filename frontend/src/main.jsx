import "@assets/scss/main.scss";
import ConfirmationModalContextProvider from "@components/Modal/ConfirmationModal";
import store from "@store";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfirmationModalContextProvider>
        <App />
      </ConfirmationModalContextProvider>
    </Provider>
  </React.StrictMode>
);
