// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import * as g from 'dreamspell-math';

// Internal
import './styles.css';
import Kin from 'Visuals/Kin/Kin';
import Plasma  from 'Visuals/Plasma/Plasma';

// Setup
var selStyle = (props) => (props.gday.selected
  ? ' selected'
  : '');
var portalStyle = (props) => (props.gday.kin.isGalacticPortal
  ? ' portal'
  : '');
var mysticStyle = (props) => (props.gday.kin.isMysticColumn
  ? ' mystic'
  : '');

const MoonDay = (props) => (

  <div
    className={'day-cell chromatic' + props.gday.kin.color + selStyle(props) + portalStyle(props) + mysticStyle(props)}
    style={{
      gridRow: props.row,
      gridColumn: props.col
    }}>

    <div className='num'>{props.gday.day}</div>

    <Kin kin={props.gday.kin}/> {/* <p>{props.gday.Moment.format('L')}</p> */}
  </div>
);
const PlasmaHead = (props) => (
  <div
    className='plasma-cell'
    style={{
      gridRow: 1,
      gridColumn: props.gday.col
    }}>
    <Plasma plasma={props.gday.plasma}/>
  </div>
);

/**
 * @class Moon
 * @description Brief description
 */
class Moon extends React.Component {
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
    let props = this.props;
    let day = props.firstDay;
    let moonDays = new Array(28);
    for (let index = 0; index < moonDays.length; index++) {

      let dayDate = new g.DreamDate(day);
      moonDays[index] = dayDate;

      dayDate.col = dayDate.dayOfWeek;
      dayDate.row = 1 + dayDate.week;
      dayDate.selected = dayDate.dayOfYear === props.selDay.dayOfYear;

      day = new g.DreamDate(day.moment.add(1, 'd'));
    }

    return (
      <div className="moon-grid">
        {moonDays.filter((val, i) => i < 7).map(gday => <PlasmaHead gday={gday} key={gday.dayOfYear} {...props}/>)}
        {moonDays.map(gday => <MoonDay gday={gday} row={gday.row} col={gday.col} key={gday.dayOfYear} {...props}/>)}
      </div>
    );
  }
}

// Enforce required properies or methods
Moon.propTypes = {
  firstDay: PropTypes.instanceOf(g.DreamDate).isRequired,
  selDay: PropTypes.instanceOf(g.DreamDate)
};

export default Moon;
