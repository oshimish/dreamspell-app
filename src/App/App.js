import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopHeader from '../TopHeader/TopHeader';
import Sign from '../Sign/Sign';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div className="App">
        <TopHeader title="Dream spell" />
        <Sign kin="17" />
      </div>
    );
  }
}

export default App;
