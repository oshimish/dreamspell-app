// Vendor
import React from "react";

import * as g from "dreamspell-math";

// Internal
import "./styles.css";
import { Plasma, Kin } from "../Kin";
import styled from "styled-components";

// Setup
var selStyle = (props: { selected?: boolean }) =>
  props.selected ? " selected" : "";
var portalStyle = (props: { gday: g.DreamDate }) =>
  props.gday.kin.isGalacticPortal ? " portal" : "";
var mysticStyle = (props: { gday: g.DreamDate }) =>
  props.gday.kin.isMysticColumn ? " mystic" : "";

const MoonDayContainer = styled.div``;

const MoonDay = (props: {
  gday: g.DreamDate;
  row: number;
  col: number;
  selected?: boolean;
}) => (
  <MoonDayContainer
    className={
      "day-cell chromatic" +
      props.gday.kin.color +
      selStyle(props) +
      portalStyle(props) +
      mysticStyle(props)
    }
    style={{
      gridRow: props.row,
      gridColumn: props.col
    }}
  >
    <div className="num">{props.gday.day}</div>
    <Kin kin={props.gday.kin} /> {/* <p>{props.gday.Moment.format('L')}</p> */}
  </MoonDayContainer>
);

const PlasmaHeadContainer = styled.div``;

const PlasmaHead = (props: { gday: g.DreamDate; col: number }) => (
  <PlasmaHeadContainer
    className="plasma-cell"
    style={{
      gridRow: 1,
      gridColumn: props.col
    }}
  >
    <Plasma plasma={props.gday.plasma} />
  </PlasmaHeadContainer>
);

/**
 * @class Moon
 * @description Brief description
 */
export class Moon extends React.Component<{
  firstDay: g.DreamDate;
  selDate?: g.DreamDate;
}> {
  render() {
    let props = this.props;
    let day = props.firstDay;
    let moonDays = new Array<g.DreamDate>(28);
    for (let index = 0; index < moonDays.length; index++) {
      let dayDate = new g.DreamDate(day);
      moonDays[index] = dayDate;
      day = new g.DreamDate(day.moment.add(1, "d"));
    }

    return (
      <div className="moon-grid">
        {moonDays
          .filter((val, i) => i < 7)
          .map(gday => (
            <PlasmaHead gday={gday} key={gday.dayOfYear} col={gday.dayOfWeek} />
          ))}

        {moonDays.map(gday => (
          <MoonDay
            gday={gday}
            row={1 + gday.week}
            col={gday.dayOfWeek}
            key={gday.dayOfYear}
            selected={
              this.props.selDate &&
              gday.dayOfYear === this.props.selDate.dayOfYear
            }
          />
        ))}
      </div>
    );
  }
}

export default Moon;
