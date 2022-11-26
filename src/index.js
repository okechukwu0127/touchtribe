import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";
import persist from "./store/store_index";

const persistStore = persist();

ReactDOM.render(
  <Provider store={persistStore.store}>
    <PersistGate loading={null} persistor={persistStore.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
