import "@assets/scss/main.scss";
import ConfirmationModalContextProvider from "@components/Modal/ConfirmationModal";
import store from "@store";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ConfirmationModalContextProvider>
          <App />
        </ConfirmationModalContextProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
