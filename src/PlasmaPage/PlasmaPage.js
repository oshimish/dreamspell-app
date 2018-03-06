// Vendor
import React from 'react';
import Plasma from '../Plasma/Plasma';
import {kin} from 'dreamspell-math';

// Internal

// Setup

/**
 * @class PlasmaPage
 * @description Brief description
 */
class PlasmaPage extends React.Component {
  // https://goo.gl/g1KBEL
  constructor(props) {
    super(props);

    this.state = {
      dsdate: this.props.dsdate
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
      <div className="plasma-page"
        onClick={ this.onClick }>
        {/* <h2>PlasmaPage</h2> */}
        <div className="kin-view-plasma"><Plasma plasma={ this.state.dsdate.Plasma } /></div>
      </div>
    );
  }
}

// Enforce required properies or methods
PlasmaPage.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default PlasmaPage;
