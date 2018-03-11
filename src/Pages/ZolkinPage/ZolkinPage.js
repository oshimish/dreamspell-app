// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import * as g from 'dreamspell-math';

// Internal
import {Kin, Sign, SignTone} from 'Visuals/visuals';
import './styles.css';

// Setup


/**
 * @class ZolkinPage
 * @description Brief description
 */
class ZolkinPage extends React.Component {
  // https://goo.gl/g1KBEL
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selectedKin: g.kin(this.props.kin)
    };

    let kins = new Array(260);
    for (let index = 0; index < 260; index++) {
      let k = g.kin(index+1);      
      kins[index] = k;     

      let row = (k.Index % 20);
      if(row == 0) row = 20;
      let col = Math.trunc(k.Index / 20) ;
      if(row != 20) col++;

      k.row = row;
      k.col = col;

      if(k.Is(this.state.selectedKin)){
        k.selected = true;
      }
    }

    this.kins = kins;

    // Chance to bind anything we need to.
    this.onClick = this.onClick.bind(this);
  }

  /**
   * Just a sample click event
   */
  onClick() {
    console.log('- onClick event', this.state);
  }

  ZGrid() {
    // const ZInnerCell = (props) => (
    //   <SignTone tone={props.kin.Tone} />
    //   <Sign sign={props.kin.Sign} />
    // );

    const KinCell = (props) => (     
      <div className={'kin-cell chromatic' + props.kin.Chromatic + (props.kin.selected ? ' selected' : '') }  {...props}         
        style={{ gridRow: props.row, gridColumn: props.col }}>
        <SignTone tone={props.kin.Tone} />
        <Sign sign={props.kin.Sign} />
      </div>
    );

    return (
      <div className='zolkin-grid-container'>
        { this.kins.map(kin => <KinCell kin={kin} row={kin.row} col={kin.col+3} key={kin.Index} /> ) }
      </div>  
    );
  }

  // https://goo.gl/HBJp32
  render() {
    return (
      <div className="zolkin-page"
        onClick={ this.onClick }>
        <h2>Цолькин</h2>
        {this.ZGrid()} 
      </div>
    );
  }
}

// Enforce required properies or methods
ZolkinPage.propTypes = {
  kin: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.instanceOf(g.Kin)
  ]).isRequired,
};

export default ZolkinPage;
