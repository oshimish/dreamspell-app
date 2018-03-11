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

    let kin = g.kin(this.props.kin);

    this.state = {
      open: false,
      num: kin.Sign.Number
    };

    this.tt = (key, opt) => i18n.t('signs:sign'+this.state.num+key, opt);

    // Chance to bind anything we need to.
    this.onClick = this.onClick.bind(this);
  }


  onClick() {
    console.log('- onClick event', this.state);
  }

  render() {
    return (
      <div className="sign-page"
        onClick={ this.onClick }>
        <Sign sign={ this.state.num } />
        <h2 className="title">
          { this.state.num }. {this.tt('.title')} ({this.tt('.maya_name')})
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


