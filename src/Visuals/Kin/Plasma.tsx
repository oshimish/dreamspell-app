// Vendor
import React from 'react';

// Internal
import './styles.css';

function importAll(r) {
  let images = {};
  r
    .keys()
    .map((item, index) => images[item.replace('./', '')] = r(item));
  return images;
}

const plasmas = importAll(require.context('./plasmas', false, /\.(png|jpe?g|svg)$/));

// Internal Setup

/**
 * @class Plasma
 * @description Brief description
 */
export class Plasma extends React.Component {

  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="plasma">
        <img
          src={plasmas[this.props.plasma + 'X.png']}
          alt={'Plasma ' + this.props.plasma}></img>
      </div>
    );
  }
}

export default Plasma;
