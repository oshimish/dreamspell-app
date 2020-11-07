// Vendor
import React, { useEffect, useState } from "react";

// Internal
import "./styles.scss";
import { WaveSpell, Moon } from "../Visuals";
import { dreamdate, DreamDate } from "dreamspell-math";
import { useAppContext } from "Context";
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

const YearPage = () => {

  const context = useAppContext()
  let gdate = context.gdate;

  const [yearStart, setYearStart] = useState(getYearStart(gdate));

  useEffect(() => {
    setYearStart(getYearStart(gdate))
  }, [gdate])

  return (
    <WaveSpell
      from={yearStart}
      iterator={iterator}
      render={i => <Moon firstDay={i} selDate={gdate} />}
    />
  );
};

export default YearPage;
