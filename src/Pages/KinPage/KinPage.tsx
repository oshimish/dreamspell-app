// Vendor
import React from 'react';
import { Kin, Plasma } from '../../Visuals/Kin';
import * as g from 'dreamspell-math';


class KinPage extends React.Component<{
  gdate: g.DreamDate
}> {

  render() {
    var dsdate = this.props.gdate;
    return (
      <div className="kin-view">
        <div className="kin-view-plasma"><Plasma plasma={dsdate.plasma} /></div>
        <div
          className="kin-view-date"
          style={{
            fontSize: 'x-large',
            padding: '23px'
          }}>{dsdate.day}.{dsdate.moon} {/* <SignTone tone={dsdate.kin.tone}/> */}
        </div>
        <div className="kin-view-kin"><Kin kin={dsdate.kin} /></div>
        <div className="kin-view-number">{dsdate.kin.number}</div>
      </div>
    );
  }
}

export default KinPage;
