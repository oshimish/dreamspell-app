// Vendor
import React from 'react';
import * as g from 'dreamspell-math';

// Internal
import {Sign, SignTone} from 'Visuals/visuals';
import './styles.css';

// Setup

let kins = new Array(260);
for (let index = 0; index < 260; index++) {
  let k = g.kin(index+1);      
  kins[index] = k;     

  k.row = k.ZolkinRow;
  k.col = k.ZolkinColumn;
}

var selStyle = (props) => (props.kin.Index === props.selected.Index ? ' selected' : '');
var portalStyle = (props) => (props.kin.IsGalacticPortal ? ' portal' : '');
var mysticStyle = (props) => (props.kin.IsMysticColumn ? ' mystic' : '');

const KinCell = (props) => (     
  <div className={'kin-cell chromatic' + props.kin.Chromatic + selStyle(props) + portalStyle(props) + mysticStyle(props)  }          
    style={{ gridRow: props.row, gridColumn: props.col }}>
    <SignTone tone={props.kin.Tone} />
    <Sign sign={props.kin.Sign} />
  </div>
);

const ZGrid = (props) => (
  // const ZInnerCell = (props) => (
  //   <SignTone tone={props.kin.Tone} />
  //   <Sign sign={props.kin.Sign} />
  // );

  <div className='zolkin-grid-container'>
    { kins.map(kin => <KinCell kin={kin} row={kin.row} col={kin.col} key={kin.Index} {...props} /> ) }
  </div>
);

class ZolkinPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="zolkin-page">
        <h2>Цолькин</h2>
        <ZGrid selected={g.kin(this.props.kin)} /> 
      </div>
    );
  }
}

export default ZolkinPage;
