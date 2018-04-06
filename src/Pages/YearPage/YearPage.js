// Vendor
import React from 'react';

// Internal

// Setup

/**
 * @class YearPage
 * @description Brief description
 */
class YearPage extends React.Component {
  // https://goo.gl/g1KBEL
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    // Chance to bind anything we need to.
    this.onClick = this.onClick.bind(this);
  }

  /**
   * Just a sample click event
   */
  onClick() {
    console.log('- onClick event', this.state);
  }

  // https://goo.gl/HBJp32
  render() {
    return (
      <div className="year-page"
        onClick={ this.onClick }>
        <h2>Год</h2>
      </div>
    );
  }
}

// Enforce required properies or methods
YearPage.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default YearPage;
