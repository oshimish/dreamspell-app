import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ArrowKeysReact from 'arrow-keys-react';
import logo from './logo.svg';
import './App.css';
import './transitions.css';
import TopHeader from '../TopHeader/TopHeader';
import KinView from '../KinView/KinView';
import OracleView from '../OracleView/OracleView';
import { CSSTransitionGroup } from 'react-transition-group';
import {dreamdate, kin} from 'dreamspell-math';
import moment from 'moment';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      date: moment()
    };

    ArrowKeysReact.config({
      left: () => {
        const date = this.state.date.add(-1, 'd');
        this.setState({ date: date });
      },
      right: () => {
        const date = this.state.date.add(1, 'd');
        this.setState({ date: date });
      }
    });
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  render() {
    return (
      <div {...ArrowKeysReact.events} tabIndex="1" className="App" ref={(input) => { this.nameInput = input; }} >
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
                      <Route exact path="/" key={location.key} component={(props) => <KinView dsdate={dreamdate(this.state.date)} {...props} />} />
                      <Route exact path="/oracle" key={location.key} component={(props) => <OracleView kin={dreamdate(this.state.date).Kin.Index} {...props} />} />
                      <Route exact path="/kin" key={location.key} component={(props) => <KinView dsdate={dreamdate(this.state.date)} {...props} />} />
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
