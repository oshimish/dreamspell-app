import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './transitions.css';
import TopHeader from '../TopHeader/TopHeader';
import KinView from '../KinView/KinView';
import OracleView from '../OracleView/OracleView';
import { CSSTransitionGroup } from 'react-transition-group';
import {dreamdate, kin} from 'dreamspell-math';

class App extends Component {

  constructor(props) {
    super(props);

    let ddate = dreamdate(new Date());
    let kin = ddate.Kin;

    this.state = { 
      date: new Date(),
      kin: kin
    };
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
                      <Route exact path="/" key={location.key} render={(props)=>
                        <KinView kin={ this.state.kin.Index } />
                      }  />
                      <Route path="/oracle" key={location.key} render={(props)=>
                        <OracleView kin={ this.state.kin.Index } />
                      }  />
                      <Route exact path="/kin" key={location.key} render={(props)=>
                        <KinView kin={ this.state.kin.Index } />
                      }  />
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
