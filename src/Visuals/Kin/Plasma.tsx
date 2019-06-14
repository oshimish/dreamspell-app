// Vendor
import React from 'react';
import * as g from 'dreamspell-math';
import requireContext from 'require-context.macro';

// Internal
import './styles.css';

function importAll(r: __WebpackModuleApi.RequireContext) {
  let images = {};
  r.keys()
    .map((item, index) => (images as any)[item.replace('./', '')] = r(item));
  return images;
}

const plasmas = importAll(requireContext('./plasmas', false, /\.(png|jpe?g|svg)$/)) as any;

// Internal Setup

/**
 * @class Plasma
 * @description Brief description
 */
export class Plasma extends React.PureComponent<{
  plasma: number
}> {

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
