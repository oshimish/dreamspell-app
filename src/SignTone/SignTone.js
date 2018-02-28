// Vendor
import React from 'react';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) =>  images[item.replace('./', '')] = r(item));
  return images;
}

const tones = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
// Internal

// Setup

/**
 * @class SignTone
 * @description Brief description
 */
class SignTone extends React.Component {
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
      <div className="sign-tone"
        onClick={ this.onClick }>
        <img src={tones['tone' + this.props.tone + '.png']} onClick={this.onClick}></img>
      </div>
    );
  }
};

// Enforce required properies or methods
SignTone.propTypes = {
  //tone: React.PropTypes.bool.isRequired
};

export default SignTone;
