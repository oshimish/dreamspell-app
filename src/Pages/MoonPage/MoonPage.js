// Vendor
import React from 'react';
//import PropTypes from 'prop-types';
import * as g from 'dreamspell-math';

// Internal
//import i18n from 'i18n';
import './styles.css';
import {Kin, Plasma} from 'Visuals/visuals';

// Setup
var selStyle = (props) => (props.gday.selected ? ' selected' : '');
var portalStyle = (props) => (props.gday.Kin.IsGalacticPortal ? ' portal' : '');
var mysticStyle = (props) => (props.gday.Kin.IsMysticColumn ? ' mystic' : '');

const MoonDay = (props) => (


  <div className={'day-cell chromatic' + props.gday.Kin.Chromatic + selStyle(props) + portalStyle(props) + mysticStyle(props)  } 
    style={{ gridRow: props.row, gridColumn: props.col }}>

    <div className='num'>{props.gday.Day}</div>

    <Kin kin={props.gday.Kin} />

    {/* <p>{props.gday.Moment.format('L')}</p> */}
  </div>
);


const PlasmaHead = (props) => (
  <div className='plasma-cell' style={{ gridRow: 1, gridColumn: props.gday.col }}>
    <Plasma plasma={props.gday.Plasma} />
  </div>
);

const Moon = (props) => {
  let day = props.firstDay;
  let moonDays = new Array(28);
  for (let index = 0; index < moonDays.length; index++) {
    
    let dayDate = new g.DreamDate(day);
    moonDays[index] = dayDate;     

    dayDate.col = dayDate.DayOfWeek;
    dayDate.row = 1 +  dayDate.Week;
    dayDate.selected = dayDate.DayOfYear === props.selDay.DayOfYear;

    day = new g.DreamDate(day.Moment.add(1, 'd'));
  }
  
  return (
    <div className="moon-grid">
      { moonDays.filter((val,i)=> i < 7).map(gday => <PlasmaHead gday={gday} key={gday.Day} {...props} /> ) }
      { moonDays.map(gday => <MoonDay gday={gday} row={gday.row} col={gday.col} key={gday.Day} {...props} /> ) }
    </div>
  );
};
  
class MoonPage extends React.Component {
  // https://goo.gl/g1KBEL
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  // https://goo.gl/HBJp32
  render() {
    let sel_day = new g.DreamDate(this.props.gdate.Moment);
    let firstDay = new g.DreamDate(sel_day.Moment.subtract(sel_day.Day-1, 'days'));
    return (
      <div className="moon-page">
        <h2>Луна</h2>
        <Moon firstDay={firstDay} selDay={sel_day}/>
      </div>
    );
  }
}

// Enforce required properies or methods
// MoonPage.propTypes = {
//   active: PropTypes.bool.isRequired
// };

export default MoonPage;
