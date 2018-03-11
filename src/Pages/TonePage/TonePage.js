// Vendor
import React from 'react';
import {SignTone} from 'Visuals/visuals';
import * as g from 'dreamspell-math';
// Internal

// Import a pre-configured instance of i18next
import i18n from 'i18n';

import './styles.css';

// Setup
class TonePage extends React.Component {
  constructor(props) {
    super(props);

    let kin = g.kin(this.props.kin);

    this.state = {
      open: false,
      num: kin.Tone.Number
    };
    this.tt = (key, opt) => i18n.t('tones:tone'+this.state.num+key, opt);

    // Chance to bind anything we need to.
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log('- onClick event', this.state);
  }

  render() {
    return (
      <div className="tone-page"
        onClick={ this.onClick }>
        <SignTone tone={ this.state.num } />
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
