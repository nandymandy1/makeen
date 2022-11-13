import "@assets/scss/main.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import DialogProvider from "@components/Modal/Dialog";

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
