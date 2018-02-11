import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopHeader from '../TopHeader/TopHeader';
import KinView from '../KinView/KinView';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div className="App">        
        <section className="screen">
          <TopHeader />
          <div className="center_block">
            <KinView />
          </div>
          <div className="bottom_block vertical_pulsate">
            <p>Scroll!</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
