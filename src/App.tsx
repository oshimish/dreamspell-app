import React, { useEffect, useRef, useContext, Suspense } from "react";
import { HashRouter as Router, Route as OriginalRoute, Switch, Redirect, RouteProps, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition, SwitchTransition } from "react-transition-group";

import KinPage from "./Pages/KinPage/KinPage";
import SignPage from "./Pages/SignPage/SignPage";
import TonePage from "./Pages/TonePage/TonePage";
import PlasmaPage from "./Pages/PlasmaPage/PlasmaPage";
import OraclePage from "./Pages/OraclePage/OraclePage";
import MoonPage from "./Pages/MoonPage/MoonPage";
import ZolkinPage from "./Pages/ZolkinPage/ZolkinPage";
import WaveSpellPage from "./Pages/WaveSpellPage/WaveSpellPage";
import YearPage from "./Pages/YearPage/YearPage";
import JourneyPage from "./Pages/JourneyPage/JourneyPage";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

// import logo from "./logo.png";
import "./App.scss";
import "./transitions.css";

import { TopHeader } from "./Components";
import { AppContext } from "./Context";


import { DatePicker } from './Components/DateInput/DatePicker';
import { useTranslation } from "react-i18next";



const Screen = () => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { i18n } = useTranslation();

  // useEffect(() => {
  // i18n.changeLanguage(i18n.language);
  // }, [i18n])

  const keyDivRef = useRef<HTMLDivElement>(null);
  const context = useContext(AppContext)!;

  useEffect(() => {
    keyDivRef.current?.focus();
  }, [keyDivRef])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode === 37 /* left arrow*/) {
      context && context.dec();
    } else if (e.keyCode === 39 /* right arrow*/) {
      context && context.inc();
    }
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route
        render={({ location }) => {
          return (
            <div className="screen"
              onKeyDown={onKeyDown}
              tabIndex={1}
              ref={keyDivRef} >
              <div className="header">
                <TopHeader />
              </div>
              <div className="content">
                <Container fluid className="h-100">
                  <Row className="justify-content-around h-100">
                    <Col md="8" className="align-self-center mx-auto my-4" >

                      <SwitchTransition mode={"out-in"}>
                        <CSSTransition key={location.pathname}
                          classNames="fade"
                          timeout={0}
                          mountOnEnter={true}
                          unmountOnExit={true}
                        >
                          <Switch location={location} >
                            <Route
                              exact={true}
                              path="/kin"
                              render={() => (
                                <KinPage gdate={context!.gdate} />
                              )}
                            />
                            <Route
                              path="/tone"
                              render={() => (
                                <TonePage gdate={context!.gdate} />
                              )}
                            />
                            <Route
                              path="/sign"
                              render={() => (
                                <SignPage gdate={context!.gdate} />
                              )}
                            />
                            <Route
                              path="/plasma"
                              render={() => (
                                <PlasmaPage gdate={context!.gdate} />
                              )}
                            />
                            <Route
                              path="/oracle"
                              render={() => (
                                <OraclePage gdate={context!.gdate} />
                              )}
                            />
                            <Route
                              path="/tzolkin"
                              render={() => (
                                <ZolkinPage gdate={context!.gdate} />
                              )}
                            />
                            <Route
                              path="/moon"
                              render={() => (
                                <MoonPage gdate={context!.gdate} />
                              )}
                            />
                            <Route
                              path="/wavespell"
                              render={() => (
                                <WaveSpellPage gdate={context!.gdate} />
                              )}
                            />
                            <Route
                              path="/journey"
                              render={() => <JourneyPage />}
                            />
                            <Route
                              path="/year"
                              render={() => (
                                <YearPage gdate={context!.gdate} />
                              )}
                            />

                            {/* not found route */}
                            <Route render={() => (
                              <Redirect to="/kin" />
                            )} />
                          </Switch>
                        </CSSTransition>
                      </SwitchTransition>
                    </Col>
                    <Col md="auto" className="align-self-start d-none d-lg-block ml-auto my-4">
                      <DatePicker />
                    </Col>
                  </Row>
                </Container>
              </div>
              {/* <div className="bottom vertical_pulsate"> <p>Scroll!</p> </div> */}

            </div>
          );
        }}
      />
    </Router>
  );
}

// loading component for suspense fallback
const Loader = () => (
  <Container className="h-100">
    {/* <img src={logo} className="App-logo" alt="Law of time" /> */}
    <Row className="h-100 align-self-center mx-auto">
      <Spinner animation="grow" />
    </Row>
  </Container>
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