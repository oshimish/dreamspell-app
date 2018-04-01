import React from 'react';
import { Link } from 'react-router-dom';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import * as moment from 'moment';

// Include the locale utils designed for moment
import MomentLocaleUtils from 'react-day-picker/moment';

// Make sure moment.js has the required locale data
import 'moment/locale/ru';

import './TopHeader.css';

class TopHeader extends React.Component {
  // https://goo.gl/g1KBEL
  constructor(props) {
    super(props);
    
    this.state = {
    };

    // Chance to bind anything we need to.
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  handleDayClick(day, { selected }) {
    let timeZoneFixedDate = moment({ year :day.getFullYear(), month :day.getMonth(), day:day.getDate()});
    this.props.onDateChange(timeZoneFixedDate);
  }

  render() {
    const selectedDay = this.props.moment.toDate();
    return (
      <div className="top-header">
        <div className="left-menu">
          <ul className="menu">
            <li>
              <Link to="/">Кин</Link>
            </li>
            <li>
              <Link to="/tone">Тон</Link>
            </li>          
            <li>
              <Link to="/sign">Печать</Link>
            </li>          
            <li>
              <Link to="/plasma">Плазма</Link>
            </li>
            <li>
              <Link to="/oracle">Оракул</Link>
            </li>
            <li>
              <Link to="/zolkin">Цолькин</Link>
            </li>
            <li>
              <Link to="/moon">Луна</Link>
            </li>
          </ul>
        </div>
        <div className="right-menu">
          <ul className="menu">
            {/* <li>
              <Link to="/">&lt;&lt;</Link>
            </li> */}
            <li>
              <DayPicker 
                selectedDays={selectedDay} 
                onDayClick={this.handleDayClick} 
                localeUtils={MomentLocaleUtils} 
                locale="ru" />                
            </li>          
            {/* <li>
              <Link to="/sign">&gt;&gt;</Link>
            </li> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default TopHeader;
