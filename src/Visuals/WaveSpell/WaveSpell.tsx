// Vendor
import React, { ReactNode } from 'react';
import * as g from 'dreamspell-math';
import styled from 'styled-components';


// Setup

const TONES = new Array(13);
function getCell(tone: g.Tone) {
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

const WaveSpellContainer = styled.div`
  display: grid;
  grid-gap: 3px; 
`;

/**
 * @class WaveSpell
 * @description Wavespell visual
 */
export class WaveSpell extends React.Component<{
  from: any,
  iterator: (i: any) => any,
  render: (item: any) => ReactNode
}> {

  render() {
    let i = this.props.from;
    let iterator = this.props.iterator;
    return (
      <WaveSpellContainer>
        {TONES.map((t) => {
          const item = (
            <Item key={t} tone={t} {...this.props} i={i} />
          );
          i = iterator(i);
          return item;
        })
        }
      </WaveSpellContainer>
    );
  }
}

export default WaveSpell;
