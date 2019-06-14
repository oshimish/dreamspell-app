// Vendor
import React from "react";
//
import * as g from "dreamspell-math";

// Internal import i18n from 'i18n';
import "./styles.scss";

import { Moon } from "../../Visuals/Moon/Moon";

// Setup

class MoonPage extends React.Component<{
  gdate: g.DreamDate;
}> {
  render() {
    let sel_day = new g.DreamDate(this.props.gdate.moment);
    let firstDay = new g.DreamDate(
      sel_day.moment.subtract(sel_day.day - 1, "days")
    );

    return (
      <div className="moon-page">
        {" "}
        <h2>Луна</h2> <Moon firstDay={firstDay} selDate={sel_day} />{" "}
      </div>
    );
  }
}

export default MoonPage;
