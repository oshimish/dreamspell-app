import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import TopHeader from '../TopHeader/TopHeader';
import KinView from '../KinView/KinView';
import OracleView from '../OracleView/OracleView';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (      
      <div className="App">    
        <Router>
          <section className="screen">
            <TopHeader />
            <div className="center_block">
              <Route exact path="/" component={KinView} />
              <Route path="/oracle" component={OracleView} />
              <Route path="/kin" component={KinView} />
            </div>
            {/* <div className="bottom_block vertical_pulsate">
              <p>Scroll!</p>
            </div> */}
          </section>
        </Router>
      </div>
    );
  }
}

export default App;
