// Vendor
import React from 'react';
import Kin from '../Kin/Kin';
import Plasma from '../Plasma/Plasma';
import {kin} from 'dreamspell-math';
// Internal

// Setup

/**
 * @class KinPage
 * @description Brief description
 */
class KinPage extends React.Component {
  // https://goo.gl/g1KBEL
  constructor(props) {
    super(props);

    this.state = {
      dsdate: this.props.dsdate
    };

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
      <div className="kin-view"
        onClick={ this.onClick }>
        <div className="kin-view-plasma"><Plasma plasma={ this.state.dsdate.Plasma } /></div>
        <div className="kin-view-date" style={{fontSize: 'x-large',  padding: '23px'}} >{ this.state.dsdate.Day }.{ this.state.dsdate.Moon }</div>
        <div className="kin-view-kin"><Kin kin={ this.state.dsdate.Kin.Index } /></div> 
        <div className="kin-view-number">{ this.state.dsdate.Kin.Index }</div>          
      </div>
    );
  }
};

// Enforce required properies or methods
KinPage.propTypes = {
  // kin: React.PropTypes.bool.isRequired
};

export default KinPage;
