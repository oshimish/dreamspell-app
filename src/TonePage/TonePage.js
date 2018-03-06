// Vendor
import React from 'react';
import Sign from '../Sign/Sign';
import SignTone from '../SignTone/SignTone';
import {kin} from 'dreamspell-math';
// Internal

// Setup

/**
 * @class TonePage
 * @description Brief description
 */
class TonePage extends React.Component {
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
      <div className="tone-page"
        onClick={ this.onClick }>
        {/* <h2>TonePage</h2>         */}
        <SignTone tone={ this.props.kin.Tone.Number } />
      </div>
    );
  }
}

// Enforce required properies or methods
TonePage.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default TonePage;
