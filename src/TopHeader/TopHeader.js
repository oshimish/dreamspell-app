import React, { Component } from 'react';
import './TopHeader.css';

class TopHeader extends Component {
  render() {
    return (
      <div className="top-header">
        <ul className="menu">
          <li>
            <a href="{ href }">Dream Spell</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default TopHeader;
