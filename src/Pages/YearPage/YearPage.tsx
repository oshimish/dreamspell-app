// Vendor
import React, { useEffect, useMemo, useState } from "react";

// Internal
import "./styles.scss";
import { WaveSpell, Moon } from "../../Visuals";
import { dreamdate, DreamDate } from "dreamspell-math";
// Setup

/**
 * @class YearPage
 * @description Brief description
 */

// todo: move to math
const getYearStart = (gdate: DreamDate) => {
  let dd = dreamdate(
    gdate.moment.clone().add(-gdate.dayOfYear, "d")
  )
  return dd;
};
const iterator = (gdate: DreamDate) => dreamdate(gdate.moment.clone().add(28, "d"));

const YearPage = (props: { gdate: DreamDate }) => {

  let yearStart = useMemo(() => getYearStart(props.gdate), [props.gdate])

  return (
    <div className="year-page">
      <h2>Год</h2>

      <WaveSpell
        from={yearStart}
        iterator={iterator}
        render={i => <Moon firstDay={i} selDate={props.gdate} />}
      />
    </div>
  );
};

export default YearPage;
