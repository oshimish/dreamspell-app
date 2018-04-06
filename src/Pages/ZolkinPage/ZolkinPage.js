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

  k.row = k.zolkinRow;
  k.col = k.zolkinColumn;
}

var selStyle = (props) => (props.kin.number === props.selected.number ? ' selected' : '');
var portalStyle = (props) => (props.kin.isGalacticPortal ? ' portal' : '');
var mysticStyle = (props) => (props.kin.isMysticColumn ? ' mystic' : '');

const KinCell = (props) => (     
  <div className={'kin-cell chromatic' + props.kin.color + selStyle(props) + portalStyle(props) + mysticStyle(props)  }          
    style={{ gridRow: props.row, gridColumn: props.col }}>
    <SignTone tone={props.kin.tone} />
    <Sign sign={props.kin.sign} />
  </div>
);

const ZGrid = (props) => (
  <div className='zolkin-grid-container'>
    { kins.map(kin => <KinCell kin={kin} row={kin.row} col={kin.col} key={kin.number} {...props} /> ) }
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
