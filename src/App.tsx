import React, { Component } from 'react';
import { translate, withNamespaces } from 'react-i18next';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import ArrowKeysReact from 'arrow-keys-react';
import { TransitionGroup } from 'react-transition-group';

import KinPage from './Pages/KinPage/KinPage';
import SignPage from './Pages/SignPage/SignPage';
import TonePage from './Pages/TonePage/TonePage';
import PlasmaPage from './Pages/PlasmaPage/PlasmaPage';
import OraclePage from './Pages/OraclePage/OraclePage';
import MoonPage from './Pages/MoonPage/MoonPage';
import ZolkinPage from './Pages/ZolkinPage/ZolkinPage';
import WaveSpellPage from './Pages/WaveSpellPage/WaveSpellPage';
import YearPage from './Pages/YearPage/YearPage';
import JourneyPage from './Pages/JourneyPage/JourneyPage';

import logo from './logo.svg';
import './App.css';
import './transitions.css';

import { RightSideBar, LeftSideBar, TopHeader } from './Components';
import { AppContextProvider, AppContext } from './Context/AppContextProvider';

class App extends Component {

  constructor(props: any) {
    super(props)

    // ArrowKeysReact.config({
    //   left: () => {
    //     store.dec();
    //   },
    //   right: () => {
    //     store.inc();
    //   }
    // });
  }

  nameInput: HTMLElement | null = null

  componentDidMount() {
    this.nameInput && this.nameInput.focus();
  }

  render() {
    return (
      <div
        //{...ArrowKeysReact.events}
        tabIndex={1}
        className="App"
        ref={(input) => {
          this.nameInput = input;
        }}>
        <AppContextProvider>
          <AppContext.Consumer>
            {(context) =>
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
                          <TransitionGroup
                            key={location.key}
                            transitionName="fade"
                            transitionEnterTimeout={600}
                            transitionLeaveTimeout={600}
                            transitionAppear={true}
                            transitionAppearTimeout={600}>
                            <Switch location={location}>

                              <Route exact={true} path="/" render={() => <KinPage gdate={context!.gdate} />} />
                              <Route path="/tone" render={() => <TonePage gdate={context!.gdate} />} />
                              <Route path="/sign" render={() => <SignPage gdate={context!.gdate} />} />
                              <Route path="/plasma" render={() => <PlasmaPage gdate={context!.gdate} />} />
                              <Route path="/oracle" render={() => <OraclePage gdate={context!.gdate} />} />
                              <Route path="/zolkin" render={() => <ZolkinPage gdate={context!.gdate} />} />
                              <Route path="/moon" render={() => <MoonPage gdate={context!.gdate} />} />
                              <Route path="/journey" render={() => <JourneyPage />} />
                              <Route path="/year" render={() => <YearPage gdate={context!.gdate} />} />

                              <Route render={() => <div>Not Found</div>} />
                            </Switch>
                          </TransitionGroup>
                        </div>
                        {/* <div className="bottom_block vertical_pulsate"> <p>Scroll!</p> </div> */}
                        <div className="right-block" >
                          <RightSideBar />
                        </div>
                      </section>
                    );
                  }} />
              </Router>}
          </AppContext.Consumer>
        </AppContextProvider>
      </div>
    );
  }
}

//export default translate(withNamespaces()(App)); 
export default App; 