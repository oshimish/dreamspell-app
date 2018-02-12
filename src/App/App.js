import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './transitions.css';
import TopHeader from '../TopHeader/TopHeader';
import KinView from '../KinView/KinView';
import OracleView from '../OracleView/OracleView';
import { CSSTransitionGroup } from 'react-transition-group';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route
            render={({ location }) => (
              <section className="screen">
                <TopHeader />
                <div className="center_block">
                  <CSSTransitionGroup key={location.key}
                    transitionName="fade"
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={600}
                    transitionAppear={true}
                    transitionAppearTimeout={600}>

                    <Switch location={location}>
                      <Route exact path="/" key={location.key} component={KinView} />
                      <Route path="/oracle" key={location.key} component={OracleView} />
                      <Route path="/kin" key={location.key} component={KinView} />
                      <Route render={() => <div>Not Found</div>} />
                    </Switch>
                  </CSSTransitionGroup>
                </div>
                {/* <div className="bottom_block vertical_pulsate">
              <p>Scroll!</p>
            </div> */}
              </section>
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
