// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import * as g from 'dreamspell-math';

// Internal
import './styles.css';

// Setup

const TONES = new Array(13);
function getCell(tone) {
  let row;
  let col;

  const n = tone.number;
  if (n < 5) { // 1234
    row = n;
    col = 1;
  } else if (n < 9) { // 5678
    row = 5;
    col = (n - 4);
  }
  else if (n < 13) { // 9,10,11,12
    row = 5 - (n - 9);
    col = 5;
  }
  else if (n === 13) { // 13
    row = 2;
    col = 4;
  }

  return { row, col };
}


for (let index = 0; index < 13; index++) {
  var tone = g.tone(index + 1);
  tone.cell = getCell(tone);
  TONES[index] = tone;
}

function Item(props) {
  return <div className={'wave-cell tone-cell-' + props.tone.number}
    style={{ gridRow: props.tone.cell.row, gridColumn: props.tone.cell.col }} >
    {props.render(props)}
  </div>;
}

/**
 * @class WaveSpell
 * @description Wavespell visual
 */
export class WaveSpell extends React.Component {
  render() {
    let i = this.props.from;
    let iterator = this.props.iterator;
    return (
      <div className="wave-spell">
        {TONES.map((t) => {
          const item = (
            <Item key={t} tone={t} {...this.props} i={i} />
          );
          i = iterator(i);
          return item;
        })
        }
      </div>
    );
  }
}

// Enforce required properies or methods
WaveSpell.propTypes = {
  from: PropTypes.any.isRequired,
  iterator: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired
};

export default WaveSpell;
