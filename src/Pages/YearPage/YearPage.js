// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import * as g from 'dreamspell-math';

// Internal
import './styles.css';
import * as Visuals from 'Visuals';

// Setup

/**
 * @class YearPage
 * @description Brief description
 */
class YearPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    // Chance to bind anything we need to.
    this.onClick = this
      .onClick
      .bind(this);
  }

  onClick() {
    console.log('- onClick event', this.state);
  }

  render() {
    const selKin = this.props.gdate.kin;
    const selDate = this.props.gdate;
    // todo: add getWavespell to math
    let wavespellStart = selDate
      .moment
      .clone()
      .add(-selDate.dayOfYear - 1, 'd');
    let iterator = (moment) => moment
      .add(28, 'd')
      .clone();
    return (
      <div className="year-page" onClick={this.onClick}>
        <h2>Год</h2>

        <Visuals.WaveSpell
          from={wavespellStart}
          iterator={iterator}
          selDay={selDate}
          render={props => (<Visuals.Moon firstDay={g.dreamdate(props.i)} selDay={props.selDay} />)} />
      </div>
    );
  }
}

// Enforce required properies or methods
YearPage.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default YearPage;
