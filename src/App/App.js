import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArrowKeysReact from 'arrow-keys-react';
import { CSSTransitionGroup } from 'react-transition-group';
import * as g from 'dreamspell-math';
import moment from 'moment';


//import logo from './logo.svg';
import './App.css';
import './transitions.css';
import TopHeader from 'Components/Header/TopHeader';
import KinPage from 'Pages/KinPage/KinPage';
import SignPage from 'Pages/SignPage/SignPage';
import TonePage from 'Pages/TonePage/TonePage';
import PlasmaPage from 'Pages/PlasmaPage/PlasmaPage';
import OraclePage from 'Pages/OraclePage/OraclePage';
import MoonPage from 'Pages/MoonPage/MoonPage';
import ZolkinPage from 'Pages/ZolkinPage/ZolkinPage';


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

    this.handleDateChange = this.handleDateChange.bind(this);
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  handleDateChange(date) {
    this.setState({ date: moment(date) });
  }

  render() {    
    var gdate = g.dreamdate(this.state.date);
    return (
      <div {...ArrowKeysReact.events} tabIndex="1" className="App" ref={(input) => { this.nameInput = input; }} >
        <Router>
          <Route 
            render={({ location }) => {
              return (
                <section className="screen">
                  <TopHeader moment={this.state.date} onDateChange={this.handleDateChange} />
                  <div className="center_block">
                    <CSSTransitionGroup key={location.key}
                      transitionName="fade"
                      transitionEnterTimeout={600}
                      transitionLeaveTimeout={600}
                      transitionAppear={true}
                      transitionAppearTimeout={600}>
                      
                      <Switch location={location}>
                        <Route exact path="/" key={location.key} render={(props) => <KinPage dsdate={gdate} {...props} />} />
                        <Route exact path="/tone" key={location.key} render={(props) => <TonePage kin={gdate.Kin} {...props} />} />
                        <Route exact path="/sign" key={location.key} render={(props) => <SignPage kin={gdate.Kin} {...props} />} />
                        <Route exact path="/plasma" key={location.key} render={(props) => <PlasmaPage dsdate={gdate} {...props} />} />
                        <Route exact path="/oracle" key={location.key} render={(props) => <OraclePage kin={gdate.Kin} {...props} />} />
                        <Route exact path="/zolkin" key={location.key} render={(props) => <ZolkinPage kin={gdate.Kin} {...props}  />} />
                        <Route exact path="/moon" key={location.key} render={(props) => <MoonPage kin={gdate} {...props} />} />
                        <Route render={() => <div>Not Found</div>} />
                      </Switch>
                    </CSSTransitionGroup>
                  </div>
                  {/* <div className="bottom_block vertical_pulsate">
                <p>Scroll!</p>
              </div> */}
                </section>
              );
            }}
          />
        </Router>
      </div>
    );
  }
}

export default translate()(App);
