import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./styles/index.css";

import { store } from "../redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <h1>HELLO WORLD</h1>
      </Router>
    </Provider>
  </React.StrictMode>
);
