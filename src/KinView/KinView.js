// Vendor
import React from 'react';
import Kin from '../Kin/Kin';
import Plasma from '../Plasma/Plasma';

// Internal

// Setup

/**
 * @class KinView
 * @description Brief description
 */
class KinView extends React.Component {
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
    console.log('- onClick event', this.state);
  }

  // https://goo.gl/HBJp32
  render() {
    return (
      <div className="kin-view"
        onClick={ this.onClick }>
        <div className="kin-view-plasma"><Plasma plasma="5" /></div>
        <div className="kin-view-kin"><Kin kin="4" /></div>         
      </div>
    );
  }
};

// Enforce required properies or methods
KinView.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default KinView;
