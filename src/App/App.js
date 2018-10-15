import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArrowKeysReact from 'arrow-keys-react';
import { CSSTransitionGroup } from 'react-transition-group';
import { Provider, Subscribe } from 'react-contextual';

import 'bootstrap';
import routes from 'routes'
import { renderRoutes } from 'react-router-config'

//import logo from './logo.svg';
import './App.css';
import './transitions.css';

import { RightSideBar, LeftSideBar, TopHeader } from 'Components';
import store from './../Context/store';

class App extends Component {

  componentDidMount() {
    this
      .nameInput
      .focus();
  }

  render() {
    return (
      <div
        {...ArrowKeysReact.events}
        tabIndex="1"
        className="App"
        ref={(input) => {
          this.nameInput = input;
        }}>
        <Provider {...store}>
          <Router>
            <Route
              render={({ location }) => {
                return (
                  <section className="screen">
                    <div className="header-block" >
                      <TopHeader />
                    </div>
                    <div className="left-block" >
                      <LeftSideBar />
                    </div>
                    <div className="center-block">
                      <CSSTransitionGroup
                        key={location.key}
                        transitionName="fade"
                        transitionEnterTimeout={600}
                        transitionLeaveTimeout={600}
                        transitionAppear={true}
                        transitionAppearTimeout={600}>
                        <Switch location={location}>
                          {renderRoutes(routes)}

                          {/* {routes.map(route => <Route {...route} />)} */}
                          <Route render={() => <div>Not Found</div>} />
                        </Switch>
                      </CSSTransitionGroup>
                    </div>
                    {/* <div className="bottom_block vertical_pulsate"> <p>Scroll!</p> </div> */}
                    <div className="right-block" >
                      <RightSideBar />
                    </div>
                  </section>
                );
              }} />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default translate()(App); 
