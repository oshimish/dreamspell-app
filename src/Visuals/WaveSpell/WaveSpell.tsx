// Vendor
import React, { ReactNode } from "react";
import * as g from "dreamspell-math";
import { dreamdate } from "dreamspell-math";
import './styles.css';

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
  i: g.DreamDate;
  render: (item: g.DreamDate) => ReactNode;
  className?: string;
}) => {
  const cell = getCell(props.tone);
  return (
    <div
      className={"wave-cell tone-cell-" + props.tone.number + " " + props.className}
      style={{ gridRow: cell.row, gridColumn: cell.col }}
    >
      {props.render(props.i)}
    </div>
  );
};


/**
 * @class WaveSpell
 * @description Wavespell visual
 */
export const WaveSpell = (props: {
  from: g.DreamDate;

  itemClassName?: string;
  iterator: (i: g.DreamDate) => g.DreamDate;
  render: (item: g.DreamDate) => ReactNode;
}) => {
  let i = dreamdate(props.from);
  let iterator = props.iterator;
  return (
    <div className={"wave-spell"}>
      {TONES.map(t => {
        const item = (
          <Item
            key={t.number}
            tone={g.tone(t.number)}
            i={dreamdate(i)}
            render={props.render}
            className={props.itemClassName}
          />
        );
        i = iterator(dreamdate(i));
        return item;
      })}
    </div>
  );
};

export default WaveSpell;
