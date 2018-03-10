// Vendor
import React from 'react';
import Plasma from '../Plasma/Plasma';
import * as g from 'dreamspell-math';

// Internal
import i18n from '../i18n';
import './styles.css';

// Setup
class PlasmaPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dsdate: this.props.dsdate,
      num: this.props.dsdate.Kin.Tone.Number
    };

    this.tt = (key, opt) => i18n.t('plasmas:plasma'+this.state.num+key, opt);

    // Chance to bind anything we need to.
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log('- onClick event', this.state);
  }

  render() {
    return (
      <div className="plasma-page"
        onClick={ this.onClick }>
        <div className="kin-view-plasma"><Plasma plasma={ this.state.dsdate.Plasma } /></div>
        <h2>{i18n.t('plasmas:name')} {this.tt('.title')}</h2>        
        <p className="about">
          {this.tt('.about', { joinArrays: '\n', interpolation: { escapeValue: false } })}
        </p>
      </div>
    );
  }
}

export default PlasmaPage;
