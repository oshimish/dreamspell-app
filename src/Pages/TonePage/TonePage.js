// Vendor
import React from 'react';
import { SignTone } from 'Visuals';
import * as g from 'dreamspell-math';
// Internal

// Import a pre-configured instance of i18next
import i18n from 'i18n';

import './styles.css';
import { subscribe } from 'react-contextual';

// Setup
@subscribe()
class TonePage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let kin = this.props.gdate.kin;
    let num = kin.tone.number;
    this.tt = (key, opt) => i18n.t('tones:tone' + num + key, opt);
    return (
      <div className="tone-page">
        <SignTone tone={num} />
        <p className="tone-head">{i18n.t('tones:name')} {this.tt('.num_plural')} </p>
        <h2>{this.tt('.title')} {i18n.t('tones:name')} {this.tt('.title2')}</h2>
        <p className="about">
          {this.tt('.about', { joinArrays: '\n', interpolation: { escapeValue: false } })}
        </p>
      </div>
    );
  }
}

export default TonePage;
