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
export class Kin extends React.PureComponent<{ kin: g.Kin }> {

  render() {
    let kin = this.props.kin;
    return (
      <div className="kin">
        <SignTone tone={kin.tone} />
        <Sign sign={kin.sign} />
      </div>
    );
  }
}

export default Kin;
