// Vendor
import React from 'react';
import {Plasma} from 'Visuals/visuals';
import * as g from 'dreamspell-math';

// Internal
import i18n from 'i18n';
import './styles.css';

// Setup
class PlasmaPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let date = g.dreamdate(this.props.dsdate);
    this.tt = (key, opt) => i18n.t('plasmas:plasma'+date.plasma+key, opt);
    return (
      <div className="plasma-page">
        <div className="kin-view-plasma"><Plasma plasma={ date.plasma } /></div>
        <h2>{i18n.t('plasmas:name')} {this.tt('.title')}</h2>        
        <p className="about">
          {this.tt('.about', { joinArrays: '\n', interpolation: { escapeValue: false } })}
        </p>
      </div>
    );
  }
}

export default PlasmaPage;
