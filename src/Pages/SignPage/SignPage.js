// Vendor
import React from 'react';
import {Sign} from 'Visuals/visuals';
import * as g from 'dreamspell-math';

// Internal
// Import a pre-configured instance of i18next
import i18n from 'i18n';
import './styles.css';


// Setup
class SignPage extends React.Component {
  // https://goo.gl/g1KBEL
  constructor(props) {
    super(props);
  }

  render() {
    let kin = g.kin(this.props.kin);
    let num = kin.sign.number;
    this.tt = (key, opt) => i18n.t('signs:sign'+num+key, opt);

    return (
      <div className="sign-page">
        <Sign sign={ num } />
        <h2 className="title">
          { num }. {this.tt('.title')} ({this.tt('.maya_name')})
        </h2> 
        <p className="info">{this.tt('.info')}</p> 
        <p className="about">
          {this.tt('.about', { joinArrays: '\n', interpolation: { escapeValue: false } })}
        </p>
        <p>{this.tt('.direction')} {this.tt('.direction_action')}</p>
        <p>{this.tt('.chakra')}</p>
        <p>{this.tt('.deviz')}</p>
      </div>
    );
  }
}

export default SignPage;


