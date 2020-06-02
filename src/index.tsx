import "core-js/stable";
import "regenerator-runtime/runtime";



import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./i18n";

import { initCustoms } from "env";
import { AppContextProvider } from "Context/AppContextProvider";

import moment from "moment";
moment.locale("ru");

initCustoms();

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
