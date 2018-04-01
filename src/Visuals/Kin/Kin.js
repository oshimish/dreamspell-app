// Vendor
import React from 'react';
import Sign from '../Sign/Sign';
import SignTone from '../SignTone/SignTone';
import * as g from 'dreamspell-math';

// Internal
import './styles.css';

// Setup

/**
 * @class Kin
 * @description Brief description
 */
class Kin extends React.Component {
  // https://goo.gl/g1KBEL
  constructor(props) {
    super(props);
  }

  // https://goo.gl/HBJp32
  render() {
    let kin = g.kin(this.props.kin);
    return (
      <div className="kin">
        <SignTone tone={ kin.Tone.Number } />
        <Sign sign={ kin.Sign.Number } />
      </div>
    );
  }
}

// Enforce required properies or methods
Kin.propTypes = {
  // kin: React.PropTypes.bool.isRequired
};

export default Kin;
