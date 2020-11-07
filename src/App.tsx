import React, { useRef, Suspense } from "react";
import Spinner from 'react-bootstrap/Spinner';

// import logo from "./logo.png";
import "./App.scss";
import "./transitions.css";

import { Screen } from "./Components/Layout/Screen";

// loading component for suspense fallback
const Loader = () => (
  <div className="spinner">
    {/* <img src={logo} className="App-logo" alt="Law of time" /> */}
    <Spinner animation="grow" />
  </div>
);

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Screen />
    </Suspense>
  );
}