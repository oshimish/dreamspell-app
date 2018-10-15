// Vendor
import React from 'react';
import { Kin, Plasma } from 'Visuals/Kin';
import * as g from 'dreamspell-math';
import { subscribe } from 'react-contextual';

@subscribe()
class KinPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var dsdate = this.props.gdate;
    return (
      <div className="kin-view" onClick={this.onClick}>
        <div className="kin-view-plasma"><Plasma plasma={dsdate.plasma} /></div>
        <div
          className="kin-view-date"
          style={{
            fontSize: 'x-large',
            padding: '23px'
          }}>{dsdate.day}.{dsdate.moon} {/* <SignTone tone={dsdate.kin.tone}/> */}
        </div>
        <div className="kin-view-kin"><Kin kin={dsdate.kin.number} /></div>
        <div className="kin-view-number">{dsdate.kin.number}</div>
      </div>
    );
  }
}

// Enforce required properies or methods
KinPage.propTypes = {
  //kin: React.PropTypes.bool.isRequired
};

export default KinPage;
