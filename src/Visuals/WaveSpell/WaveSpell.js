// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import * as g from 'dreamspell-math';

// Internal
import './styles.css';

// Setup

const TONES = new Array(13);
function getCell(tone)  {
  let row;
  let col;

  const n = tone.number;
  if(n < 5){ // 1234
    row = n; 
    col = 1;
  }else if (n < 9){ // 5678
    row = 5;
    col = (n-4);
  }
  else if (n < 13){ // 9,10,11,12
    row = 5 - (n-9);
    col = 5; 
  }
  else if (n === 13){ // 13
    row = 2;
    col = 4; 
  }

  return {row, col};
} 


for (let index = 0; index < 13; index++) {
  var tone = g.tone(index); 
  tone.cell = getCell(tone);
  TONES[index] = tone;
}

function Item(props) {
  return <div className={'wave-cell tone-cell-' & props.tone.number}
    style={{ gridRow: props.tone.cell.row, gridColumn: props.tone.cell.col }} >
    {props.render(props)}
  </div>;
}

class WaveSpell extends React.Component {
  render() {
    return (
      <div className="wave-spell">
        {TONES.map((t) => <Item key={t} tone={t} {...this.props} />)}        
      </div>
    );
  }
}

// Enforce required properies or methods
WaveSpell.propTypes = {
  render: PropTypes.func.isRequired
};

export default WaveSpell;
