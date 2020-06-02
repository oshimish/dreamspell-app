// Vendor
import React from "react";

import * as g from "dreamspell-math";

// Internal
import "./styles.scss";
import * as Visuals from "../../Visuals";
import { Moment } from "moment";
import { DreamDate } from "dreamspell-math";

// Setup

/**
 * @class WaveSpellPage
 * @description Brief description
 */

class WaveSpellPage extends React.Component<{
  gdate: g.DreamDate;
}> {
  onClick = () => {
    console.log("- onClick event", this.state);
  };

  render() {
    const selKin = this.props.gdate.kin;
    const selDate = this.props.gdate;
    // todo: add getWavespell to math
    let wavespellStart = g.dreamdate(
      selDate.moment.clone().add(-(selKin.tone.number - 1), "d")
    );
    return (
      <div className="wave-spell-page px-4 py-2" onClick={this.onClick}>
        <h2>Волновой Модуль</h2>

        <Visuals.WaveSpell
          from={wavespellStart}
          itemClassName="m-2"
          iterator={(gdate: DreamDate) =>
            g.dreamdate(gdate.moment.clone().add(1, "d"))
          }
          render={i => (
            // <SignTone {...this.props} tone={props.tone} />
            <Visuals.Kin kin={i.kin} />
          )}
        />
      </div>
    );
  }
}

export default WaveSpellPage;
