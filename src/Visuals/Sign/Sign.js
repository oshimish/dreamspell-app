// Vendor
import React from 'react';
import * as g from 'dreamspell-math';

// Internal
function importAll(r) {
  let images = {};
  r.keys().map((item, index) =>  images[item.replace('./', '')] = r(item));
  return images;
}

const signs = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

// Setup

/**
 * @class Sign
 * @description Brief description
 */
class Sign extends React.Component {
  // https://goo.gl/g1KBEL
  constructor(props) {
    super(props);

    var sign = g.sign(this.props.sign);
    var num = sign.Number;
    if(num === 20) {
      num = 0;
    }

    this.state = {
      sign: sign,
      num: num
    };

    // Chance to bind anything we need to.
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log('- onClick event', this.state);
  }

  // https://goo.gl/HBJp32
  render() {
    return (
      <div className="sign"
        onClick={this.onClick} >
        {/* <p className="huge">{this.props.kin}</p> */}
        <img src={signs[this.state.num + 'y.png']} onClick={this.onClick} alt={'Sign ' + this.state.sign }></img>
      </div>
    );
  }
};

// Enforce required properies or methods
Sign.propTypes = {
  // sign: React.PropTypes.bool.isRequired
};

export default Sign;
