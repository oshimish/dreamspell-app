// Vendor
import React from 'react';
import Sign from '../Sign/Sign';
import SignTone from '../SignTone/SignTone';
import {kin} from 'dreamspell-math';
// Internal

// Import a pre-configured instance of i18next
import i18n from '../i18n';

import './styles.css';

// Setup
class TonePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      num: this.props.kin.Tone.Number
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
        <h2>{this.tt('.title')} {i18n.t('tones:name')}</h2>        
        <p className="about">
          {this.tt('.about', { joinArrays: '\n', interpolation: { escapeValue: false } })}
        </p>
      </div>
    );
  }
}

export default TonePage;
