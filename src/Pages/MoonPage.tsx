// Vendor
import React from "react";
//
import * as g from "dreamspell-math";

// Internal import i18n from 'i18n';
import "./styles.scss";

import { Moon } from "../Visuals/Moon/Moon";
import { useAppContext } from "Context";

// Setup

const MoonPage = () => {
  const context = useAppContext()
  let kin = context.gdate.kin;
  let sel_day = new g.DreamDate(context.gdate.moment);
  let firstDay = new g.DreamDate(
    sel_day.moment.subtract(sel_day.day - 1, "days")
  );

  return (
    <div className="moon-page">
      {" "}
      <h2>Луна</h2>
      <Moon firstDay={firstDay} selDate={sel_day} />{" "}
    </div>
  );
}


export default MoonPage;
