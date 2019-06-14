// Vendor
import React, { ReactNode } from "react";
import * as g from "dreamspell-math";
import styled from "styled-components";
import moment, { Moment } from "moment";

// Setup

const TONES = new Array<g.Tone>(13);

const initTones = () => {
  for (let index = 0; index < 13; index++) {
    var tone = g.tone(index + 1);
    TONES[index] = tone;
  }
};

initTones();

function getCell(tone: g.Tone) {
  let row;
  let col;

  const n = tone.number;
  if (n < 5) {
    // 1234
    row = n;
    col = 1;
  } else if (n < 9) {
    // 5678
    row = 5;
    col = n - 4;
  } else if (n < 13) {
    // 9,10,11,12
    row = 5 - (n - 9);
    col = 5;
  } else if (n === 13) {
    // 13
    row = 2;
    col = 4;
  }

  return { row, col };
}

const Item = (props: {
  tone: g.Tone;
  i: Moment;
  render: (item: Moment) => ReactNode;
}) => {
  const cell = getCell(props.tone);
  return (
    <div
      className={"wave-cell tone-cell-" + props.tone.number}
      style={{ gridRow: cell.row, gridColumn: cell.col }}
    >
      {props.render(props.i)}
    </div>
  );
};

const WaveSpellContainer = styled.div`
  display: grid;
  grid-gap: 3px;
`;

/**
 * @class WaveSpell
 * @description Wavespell visual
 */
export const WaveSpell = (props: {
  from: Moment;
  iterator: (i: Moment) => Moment;
  render: (item: Moment) => ReactNode;
}) => {
  let i = moment(props.from);
  let iterator = props.iterator;
  return (
    <WaveSpellContainer className={"wave-spell"}>
      {TONES.map(t => {
        const item = (
          <Item
            key={t.number}
            tone={g.tone(t.number)}
            i={moment(i)}
            render={props.render}
          />
        );
        i = iterator(i);
        return item;
      })}
    </WaveSpellContainer>
  );
};

export default WaveSpell;
