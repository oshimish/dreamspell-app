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
class SignPage extends React.Component {
  // https://goo.gl/g1KBEL
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      num: this.props.kin.Sign.Number
    };
    this.state.key =  'signs:sign' + this.state.num,

    // Chance to bind anything we need to.
    this.onClick = this.onClick.bind(this);
  }

  /**
   * Just a sample click event
   */
  onClick() {
    console.log('- onClick event', this.state);
  }

  // https://goo.gl/HBJp32
  render() {
    return (
      <div className="sign-page"
        onClick={ this.onClick }>
        <Sign sign={ this.state.num } />
        <h2 className="title">
          {i18n.t(this.state.key + '.title')} ({i18n.t(this.state.key + '.maya_name')})
        </h2> 
        <p className="info">{i18n.t(this.state.key + '.info')}</p> 
        <p className="about">
          {i18n.t(this.state.key + '.about', { joinArrays: '\n', interpolation: { escapeValue: false } })}
        </p>
        <p>{i18n.t(this.state.key + '.direction')} {i18n.t(this.state.key + '.direction_action')}</p>
        <p>{i18n.t(this.state.key + '.chakra')}</p>
        <p>{i18n.t(this.state.key + '.deviz')}</p>
      </div>
    );
  }
}

// Enforce required properies or methods
SignPage.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default SignPage;


