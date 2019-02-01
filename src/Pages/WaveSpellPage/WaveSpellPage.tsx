// Vendor
import React from 'react';

import * as g from 'dreamspell-math';

// Internal
import './styles.css';
import * as Visuals from '../../Visuals';
import { Moment } from 'moment';

// Setup

/**
 * @class WaveSpellPage
 * @description Brief description
 */


class WaveSpellPage extends React.Component<{
  gdate: g.DreamDate
}> {

  onClick = () => {
    console.log('- onClick event', this.state);
  }

  render() {
    const selKin = this.props.gdate.kin;
    const selDate = this.props.gdate;
    // todo: add getWavespell to math
    let wavespellStart = selDate.moment.clone().add(-selKin.tone.number, 'd');
    return (
      <div className="wave-spell-page"
        onClick={this.onClick}>
        <h2>Волновой Модуль</h2>

        <Visuals.WaveSpell from={wavespellStart}
          iterator={(moment: Moment) => moment.add(1, 'd').clone()}
          render={i => (
            // <SignTone {...this.props} tone={props.tone} />
            <Visuals.Kin kin={g.dreamdate(i).kin} />
          )} />
      </div>
    );
  }
}

export default WaveSpellPage;
