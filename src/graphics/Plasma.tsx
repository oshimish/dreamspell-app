// Vendor
import React from 'react';

// Internal
import './styles.scss';
import { useGraphics } from 'graphics/hooks';

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
        src={graphics.plasmas[props.plasma - 1]}
        alt={'Plasma ' + props.plasma}></img>
    </div>
  );
}

export default Plasma;
