import React, { Suspense } from 'react';
import { Screen } from "./Components/Layout/Screen";
import Spinner from 'react-bootstrap/esm/Spinner';

import logo from "./logo.png";
import "./App.scss";
import "./transitions.css";
import { AppContextProvider } from 'Context';
import { ProSidebarProvider } from 'react-pro-sidebar';

// loading component for suspense fallback
const Loader = () => (
  <div className="spinner">
    {/* <img src={logo} className="App-logo" alt="Law of time" /> */}
    <Spinner animation="grow" />
  </div>
);
// i18n translations might still be loaded by the http backend
// use react's Suspense
function App() {
  return (
    <AppContextProvider>
      <ProSidebarProvider>
        <Suspense fallback={<Loader />}>
          <Screen />
        </Suspense>
      </ProSidebarProvider>
    </AppContextProvider>
  );
}

export default App;
