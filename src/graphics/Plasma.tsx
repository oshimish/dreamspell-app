// Vendor
import React from 'react';

// Internal
import './styles.css';
import { graphics } from 'graphics';

/**
 * Show Plasma graphics
 */
export const Plasma = (props: {
  plasma: number
}) => {

  return (
    <div className="plasma">
      <img
        src={graphics.plasmas[props.plasma + 'X.png']}
        alt={'Plasma ' + props.plasma}></img>
    </div>
  );
}

export default Plasma;
