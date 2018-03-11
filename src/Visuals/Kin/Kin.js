// Vendor
import React from 'react';
import Sign from '../Sign/Sign';
import SignTone from '../SignTone/SignTone';
import {kin} from 'dreamspell-math';

// Internal

// Setup

/**
 * @class Kin
 * @description Brief description
 */
class Kin extends React.Component {
  // https://goo.gl/g1KBEL
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      kin: kin(this.props.kin)
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
      <div className="kin"
        onClick={ this.onClick }>
        <SignTone tone={ this.state.kin.Tone.Number } />
        <Sign sign={ this.state.kin.Sign.Number } />
      </div>
    );
  }
};

// Enforce required properies or methods
Kin.propTypes = {
  // kin: React.PropTypes.bool.isRequired
};

export default Kin;
