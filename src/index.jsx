import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";

import App from "./App";
import store from "./store";

const root = createRoot(document.getElementById("root"));
root.render(
  // Wrap everything in a Provider
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
