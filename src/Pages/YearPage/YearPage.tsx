// Vendor
import React, { useEffect, useState } from "react";

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
const getYearStart = (gdate: DreamDate) => dreamdate(
  gdate.moment.clone().add(-gdate.dayOfYear - 1, "d")
);
const iterator = (gdate: DreamDate) => dreamdate(gdate.moment.clone().add(28, "d"));

const YearPage = (props: { gdate: DreamDate }) => {

  const [yearStart, setYearStart] = useState(getYearStart(props.gdate));

  useEffect(() => {
    setYearStart(getYearStart(props.gdate))
  }, [props.gdate])

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
