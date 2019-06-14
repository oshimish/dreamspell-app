// Vendor
import React from "react";

// Internal
import "./styles.css";
import { WaveSpell, Moon } from "../../Visuals";
import { dreamdate, DreamDate } from "dreamspell-math";
// Setup

/**
 * @class YearPage
 * @description Brief description
 */

const YearPage = (props: { gdate: DreamDate }) => {
  const selKin = props.gdate.kin;
  const selDate = props.gdate;
  // todo: add getWavespell to math
  let wavespellStart = dreamdate(
    selDate.moment.clone().add(-selDate.dayOfYear, "d")
  );
  let iterator = (gdate: DreamDate) =>
    dreamdate(gdate.moment.clone().add(28, "d"));
  return (
    <div className="year-page">
      <h2>Год</h2>

      <WaveSpell
        from={wavespellStart}
        iterator={iterator}
        render={i => <Moon firstDay={i} selDate={selDate} />}
      />
    </div>
  );
};

export default YearPage;
