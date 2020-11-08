// Vendor
import React from "react";

import * as g from "dreamspell-math";

// Internal
import "./styles.scss";
import { DreamDate } from "dreamspell-math";
import WaveSpell from "Visuals/WaveSpell/WaveSpell";
import { Kin } from "graphics";
import { useAppContext } from "Context";

// Setup

/**
 * @class WaveSpellPage
 * @description Brief description
 */

const WaveSpellPage = () => {

  const context = useAppContext()
  const selKin = context.gdate.kin;
  const selDate = context.gdate;
  // todo: use getWavespell from math
  let wavespellStart = g.dreamdate(
    selDate.moment.clone().add(-(selKin.tone.number - 1), "d")
  );
  return (
    <div className="wave-spell-page px-4 py-2">

      <WaveSpell
        from={wavespellStart}
        itemClassName="my-2 mx-2"
        iterator={(gdate: DreamDate) =>
          g.dreamdate(gdate.moment.clone().add(1, "d"))
        }
        render={i => (
          // <SignTone {...this.props} tone={props.tone} />
          <Kin kin={i.kin} opt={{
            active: i.moment === selDate.moment
          }} />
        )}
      />
    </div>
  );
}


export default WaveSpellPage;
