import React, { Component } from 'react';
import { translate, withNamespaces } from 'react-i18next';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import ArrowKeysReact from 'arrow-keys-react';
import { TransitionGroup } from 'react-transition-group';

import routes from './routes';

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

                              {routes.map((r) => <Route path={r.path} exact={r.exact} component={r.component} gdate={context && context.gdate} />)}

                              {/* {routes.map(route => <Route {...route} />)} */}
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