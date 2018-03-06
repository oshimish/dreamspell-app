// Vendor
import React from 'react';
import Sign from '../Sign/Sign';
import SignTone from '../SignTone/SignTone';
import {kin} from 'dreamspell-math';

// Internal

// Setup

/**
 * @class SignPage
 * @description Brief description
 */
class SignPage extends React.Component {
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
      <div className="sign-page"
        onClick={ this.onClick }>
        {/* <h2>SignPage</h2> */}
        <Sign sign={ this.props.kin.Sign.Number } />
      </div>
    );
  }
}

// Enforce required properies or methods
SignPage.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default SignPage;
