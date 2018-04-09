// Vendor
import React from 'react';
import * as g from 'dreamspell-math';

// Internal
import './styles.css';

function importAll(r) {
  let images = {};
  r
    .keys()
    .map((item, index) => images[item.replace('./', '')] = r(item));
  return images;
}

const signs = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

// Setup

/**
 * @class Sign
 * @description Brief description
 */
class Sign extends React.Component {

  render() {
    var sign = g.sign(this.props.sign);
    var num = sign.number;
    if (num === 20) {
      num = 0;
    }
    return (
      <div className="sign">
        <img src={signs[num + 'y.png']} alt={'Sign ' + sign}></img>
      </div>
    );
  }
};

// Enforce required properies or methods
Sign.propTypes = {
  // sign: React.PropTypes.bool.isRequired
};

export default Sign;
