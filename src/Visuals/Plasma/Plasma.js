// Vendor
import React from 'react';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) =>  images[item.replace('./', '')] = r(item));
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
  // eslint-disable-next-line
  constructor() {
    super();
  }

  // https://goo.gl/HBJp32
  render() {
    return (
      <div className="plasma">
        <img src={plasmas[this.props.plasma + 'X.png']} alt={'Plasma ' + this.props.plasma}></img>
      </div>
    );
  }
}

// Enforce required properies or methods
Plasma.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default Plasma;
