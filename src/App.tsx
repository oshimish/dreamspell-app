import React, { Component, useEffect, useRef, useContext } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";

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

import logo from "./logo.svg";
import "./App.scss";
import "./transitions.css";

import { TopHeader } from "./Components";
import { AppContext } from "./Context";


import { DatePicker } from './Components/DateInput/DatePicker';
import { DateInput } from './Components/DateInput/DateInput';

const App = () => {

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
                    <Col md="8" className="align-self-center mx-auto" >
                      <TransitionGroup
                        key={location.key}
                        transitionname="fade"
                        transitionentertimeout={600}
                        transitionleavetimeout={600}
                        transitionappear="true"
                        transitionappeartimeout={600}
                      >
                        <Switch location={location ?? "/"}>
                          <Route
                            exact={true}
                            path="/"
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
                            path="/zolkin"
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
                            <KinPage gdate={context!.gdate} />
                          )} />
                        </Switch>
                      </TransitionGroup>
                    </Col>
                    <Col md="4" className="align-self-start d-none d-md-block mx-auto my-4">
                      {/* <DateInput /> */}
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

//export default translate(withNamespaces()(App));
export default App;
