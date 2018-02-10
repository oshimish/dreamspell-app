import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import TopHeader from './TopHeader';
import Sign from './Sign';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TopHeader title="Dream spell" />
        <Sign kin="17" />
      </div>
    );
  }
}

export default App;
