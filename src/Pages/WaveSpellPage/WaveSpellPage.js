// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import * as g from 'dreamspell-math';

// Internal
import './styles.css';
import {Kin, Plasma, WaveSpell, SignTone} from 'Visuals/visuals';
 
// Setup

/**
 * @class WaveSpellPage
 * @description Brief description
 */
class WaveSpellPage extends React.Component {
  // https://goo.gl/g1KBEL
  constructor(props) {
    super(props);

    this.state = {
      open: false
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
    const selKin = this.props.gdate.kin;
    const selDate = this.props.gdate;
    // todo: add getWavespell to math
    let kinMoment = selDate.moment.add(-selKin.tone.number-1, 'd');
    const dates = new Array(13); 
    for (let index = 0; index < dates.length; index++) {
      let date = g.dreamdate(kinMoment);
      dates[index] = date;
      kinMoment = kinMoment.add(1,'d');
    }
    return (
      <div className="wave-spell-page"
        onClick={ this.onClick }>
        <h2>Волновой Модуль</h2>

        <WaveSpell render={props => (
          // <SignTone {...this.props} tone={props.tone} />
          <Kin kin={dates[props.tone.number-1].kin}  />
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
