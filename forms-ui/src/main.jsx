import "@assets/scss/main.scss";
import DialogProvider from "@components/Modal/Dialog";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DialogProvider>
        <Router>
          <App />
        </Router>
      </DialogProvider>
    </Provider>
  </React.StrictMode>
);

/**
 * TODO:
 * Delete Form Content
 * Add new form buttom modal
 * Todo Add Text Form Content
 * Drag fix position of Form Content
 * Form to set props of the form fileds
 */
