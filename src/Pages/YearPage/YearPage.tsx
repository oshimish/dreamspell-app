// Vendor
import React from "react";

import * as g from "dreamspell-math";

// Internal
import "./styles.css";
import { WaveSpell, Moon } from "../../Visuals";
import { Moment } from "moment";
// Setup

/**
 * @class YearPage
 * @description Brief description
 */

class YearPage extends React.Component<{
  gdate: g.DreamDate;
}> {
  render() {
    const selKin = this.props.gdate.kin;
    const selDate = this.props.gdate;
    // todo: add getWavespell to math
    let wavespellStart = selDate.moment.clone().add(-selDate.dayOfYear, "d");
    let iterator = (moment: Moment) => moment.add(28, "d").clone();
    return (
      <div className="year-page">
        <h2>Год</h2>

        <WaveSpell
          from={wavespellStart}
          iterator={iterator}
          render={i => <Moon firstDay={g.dreamdate(i)} selDate={selDate} />}
        />
      </div>
    );
  }
}

export default YearPage;
