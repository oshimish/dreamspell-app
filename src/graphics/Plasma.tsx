// Vendor
import React from 'react';

// Internal
import './styles.css';
import { useKinGraphics, useGraphics } from 'graphics/hooks';

/**
 * Show Plasma graphics
 */
export const Plasma = (props: {
  plasma: number
}) => {

  const graphics = useGraphics();

  return (
    <div className="plasma">
      <img
        src={graphics.plasmas[props.plasma]}
        alt={'Plasma ' + props.plasma}></img>
    </div>
  );
}

export default Plasma;
