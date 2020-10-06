import "core-js/stable";
import "regenerator-runtime/runtime";



import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./i18n";

import config from "config";

import { AppContextProvider } from "Context/AppContextProvider";

import moment from "moment";
import classNames from "classnames";
moment.locale("ru");


document.getElementsByTagName("body")[0].className = classNames({ ktoty: config.ktoty });

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
