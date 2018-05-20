// Vendor
import React from 'react';
import PropTypes from 'prop-types';

// Internal
import './styles.css';

// Setup

/**
 * @class JourneyPage
 * @description Brief description
 */
class JourneyPage extends React.Component {
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
      <div className="journey-page"
        onClick={ this.onClick }>
        <h2>JourneyPage</h2>
      </div>
    );
  }
}

// Enforce required properies or methods
JourneyPage.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default JourneyPage;
