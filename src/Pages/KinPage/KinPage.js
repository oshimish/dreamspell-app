// Vendor
import React from 'react';
import {Kin, Plasma} from 'Visuals/visuals';
import * as g from 'dreamspell-math';
// Internal

// Setup

/**
 * @class KinPage
 * @description Brief description
 */
class KinPage extends React.Component {
  // https://goo.gl/g1KBEL
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  // https://goo.gl/HBJp32
  render() {
    var dsdate = g.dreamdate(this.props.dsdate);
    return (
      <div className="kin-view"
        onClick={ this.onClick }>
        <div className="kin-view-plasma"><Plasma plasma={ dsdate.Plasma } /></div>
        <div className="kin-view-date" style={{fontSize: 'x-large',  padding: '23px'}} >{ dsdate.Day }.{ dsdate.Moon }</div>
        <div className="kin-view-kin"><Kin kin={ dsdate.Kin.Index } /></div> 
        <div className="kin-view-number">{ dsdate.Kin.Index }</div>          
      </div>
    );
  }
}

// Enforce required properies or methods
KinPage.propTypes = {
  //kin: React.PropTypes.bool.isRequired
};

export default KinPage;
