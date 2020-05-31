import "core-js/stable";
import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";

import "./index.scss";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import i18n from "./i18n"; // initialized i18next instance

import { initCustoms } from "./customs";
import { AppContextProvider } from "Context/AppContextProvider";

initCustoms();

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </I18nextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
