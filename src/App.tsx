import React, { useEffect, useRef, useContext, Suspense } from "react";
import { HashRouter as Router, Route as OriginalRoute, Switch, Redirect, RouteProps, Route, useLocation } from "react-router-dom";
import classNames from 'classnames';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

// import logo from "./logo.png";
import "./App.scss";
import "./transitions.css";

import { TopHeader } from "./Components/Layout";
import { AppContext } from "./Context";


import { DatePicker } from './Components/DateInput/DatePicker';
import { useTranslation } from "react-i18next";
import routes from "consts/routes";
import { Footer } from './Components/Layout/Footer';
import { SwipeRouteView, SwipeableRoutesView } from './Components/Layout/SwipeView';
import SwipeableViews from 'react-swipeable-views';

const Screen = () => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { i18n } = useTranslation();

  // useEffect(() => {
  // i18n.changeLanguage(i18n.language);
  // }, [i18n])

  // const keyDivRef = useRef<HTMLDivElement>(null);
  const context = useContext(AppContext)!;

  // useEffect(() => {
  //   keyDivRef.current?.focus();
  // }, [keyDivRef])

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.className = classNames({ ktoty: context.ktoty });
  }, [context, context.ktoty])


  // const onKeyDown = (e: React.KeyboardEvent) => {
  //   if (e.keyCode === 37 /* left arrow*/) {
  //     context && context.dec();
  //   } else if (e.keyCode === 39 /* right arrow*/) {
  //     context && context.inc();
  //   }
  // };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route
        render={({ location }) => {
          return (
            <div className={classNames('screen', { ktoty: context.ktoty })}
              // onKeyDown={onKeyDown}
              tabIndex={1}
            // ref={keyDivRef} 
            >
              <div className="header">
                <TopHeader />
              </div>
              <div className="content">
                <Container fluid className="h-100">
                  <Row className="justify-content-around h-100">
                    <Col md="8" className="align-self-center mx-auto my-4" >

                      <Switch location={location} >

                        <SwipeRouteView />
                        {/* <SwipeableRoutesView /> */}

                        {/* not found route */}
                        <Route render={() => (
                          <Redirect to="/kin" />
                        )} />
                      </Switch>

                    </Col>
                    <Col md="auto" className="align-self-start d-none d-lg-block ml-auto my-4">
                      <DatePicker />
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className="bottom">
                <Footer />
              </div>
            </div>
          );
        }}
      />
    </Router>
  );
}

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