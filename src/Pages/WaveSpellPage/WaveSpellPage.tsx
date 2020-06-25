// Vendor
import React from "react";

import * as g from "dreamspell-math";

// Internal
import "./styles.scss";
import { DreamDate } from "dreamspell-math";
import WaveSpell from "Visuals/WaveSpell/WaveSpell";
import { Kin } from "graphics";

// Setup

/**
 * @class WaveSpellPage
 * @description Brief description
 */

const WaveSpellPage = (props: {
  gdate: g.DreamDate;
}) => {

  const selKin = props.gdate.kin;
  const selDate = props.gdate;
  // todo: use getWavespell from math
  let wavespellStart = g.dreamdate(
    selDate.moment.clone().add(-(selKin.tone.number - 1), "d")
  );
  return (
    <div className="wave-spell-page px-4 py-2">
      <h2>Волновой Модуль</h2>

      <WaveSpell
        from={wavespellStart}
        itemClassName="my-2 mx-4"
        iterator={(gdate: DreamDate) =>
          g.dreamdate(gdate.moment.clone().add(1, "d"))
        }
        render={i => (
          // <SignTone {...this.props} tone={props.tone} />
          <Kin kin={i.kin} />
        )}
      />
    </div>
  );
}


export default WaveSpellPage;
