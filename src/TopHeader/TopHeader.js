import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './TopHeader.css';

class TopHeader extends Component {
  render() {
    return (
      <div className="top-header">
        <ul className="menu">
          <li>
            <Link to="/">Кин</Link>
          </li>
          {/* <li>
            <Link to="/kin">Кин</Link>
          </li> */}
          <li>
            <Link to="/oracle">Оракул</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default TopHeader;
