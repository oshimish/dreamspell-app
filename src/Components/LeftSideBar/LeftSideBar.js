// Vendor
import React from 'react';
import PropTypes from 'prop-types';

// Internal
import './styles.css';

// Setup

/**
 * @class LeftSideBar
 * @description Brief description
 */
class LeftSideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    // Chance to bind anything we need to.
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log('- onClick event', this.state);
  }

  render() {
    return (
      <div className="left-side-bar"
        onClick={ this.onClick }>
      </div>
    );
  }
}

// Enforce required properies or methods
LeftSideBar.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default LeftSideBar;
