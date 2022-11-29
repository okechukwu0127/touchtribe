import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";
import persist from "./store/store_index";

const persistStore = persist();

ReactDOM.render(
  <Provider store={persistStore.store}>
    <PersistGate loading={null} persistor={persistStore.persistor}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={(props) => <App {...props} />} />
          <Route path="/:title" component={(props) => <App {...props} />} />
        </Switch>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
