// Vendor
import React from 'react';
import Sign from './Sign';
import SignTone from './SignTone';
import * as g from 'dreamspell-math';

// Setup

/**
 * @class Kin
 * @description Brief description
 */
export class Kin extends React.Component {

  render() {
    let kin = g.kin(this.props.kin);
    return (
      <div className="kin">
        <SignTone tone={kin.tone.number} />
        <Sign sign={kin.sign.number} />
      </div>
    );
  }
}

// Enforce required properies or methods
Kin.propTypes = {
  // kin: React.PropTypes.bool.isRequired
};

export default Kin;
