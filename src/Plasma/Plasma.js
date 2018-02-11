// Vendor
import React from 'react';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const plasmas = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

// Internal

// Setup

/**
 * @class Plasma
 * @description Brief description
 */
class Plasma extends React.Component {
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
      <div className="plasma"
        onClick={ this.onClick }>
        <img src={plasmas[this.props.plasma + 'X.png']} onClick={this.onClick}></img>
      </div>
    );
  }
};

// Enforce required properies or methods
Plasma.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default Plasma;
