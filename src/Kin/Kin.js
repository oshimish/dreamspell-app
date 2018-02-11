// Vendor
import React from 'react';
import Sign from '../Sign/Sign';

// Internal

// Setup

/**
 * @class Kin
 * @description Brief description
 */
class Kin extends React.Component {
  // https://goo.gl/g1KBEL
  constructor() {
    super();

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
    console.log(`- onClick event`, this.state);
  }

  // https://goo.gl/HBJp32
  render() {
    return (
      <div className="kin"
        onClick={ this.onClick }>
        <Sign kin={ this.props.kin } />
      </div>
    );
  }
};

// Enforce required properies or methods
Kin.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default Kin;
