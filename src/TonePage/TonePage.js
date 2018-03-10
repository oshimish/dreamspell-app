// Vendor
import React from 'react';
import Sign from '../Sign/Sign';
import SignTone from '../SignTone/SignTone';
import {kin} from 'dreamspell-math';
// Internal

// Import a pre-configured instance of i18next
import i18n from '../i18n';

// Setup
class TonePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

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
        <h2>{i18n.t('tones:def')}</h2>        
        <SignTone tone={ this.props.kin.Tone.Number } />
      </div>
    );
  }
}

export default TonePage;
