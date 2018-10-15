// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import { subscribe } from 'react-contextual';

// Setup

/**
 * @class JourneyPage
 * @description Brief description
 */

@subscribe()
class JourneyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

  }

  render() {
    return (
      <div className="journey-page"
        onClick={this.onClick}>
        <h2>Journey Page</h2>
      </div>
    );
  }
}

// Enforce required properies or methods
JourneyPage.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default JourneyPage;
