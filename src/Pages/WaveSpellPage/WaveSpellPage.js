// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import * as g from 'dreamspell-math';

// Internal
import './styles.css';
import * as Visuals from 'Visuals/visuals';
 
// Setup

/**
 * @class WaveSpellPage
 * @description Brief description
 */
class WaveSpellPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }; 

    // Chance to bind anything we need to.
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log('- onClick event', this.state);
  }

  render() {
    const selKin = this.props.gdate.kin;
    const selDate = this.props.gdate;
    // todo: add getWavespell to math
    let wavespellStart = selDate.moment.clone().add(-selKin.tone.number, 'd');
    return (
      <div className="wave-spell-page"
        onClick={ this.onClick }>
        <h2>Волновой Модуль</h2>

        <Visuals.WaveSpell from={wavespellStart} 
          iterator={(moment)=>  moment.add(1,'d').clone()} 
          render={props => (            
            // <SignTone {...this.props} tone={props.tone} />
            <Visuals.Kin kin={g.dreamdate(props.i).kin}  />
          )} />
      </div>
    );
  }
}

// Enforce required properies or methods
WaveSpellPage.propTypes = {
  gdate: PropTypes.instanceOf(g.DreamDate).isRequired
};

export default WaveSpellPage;
