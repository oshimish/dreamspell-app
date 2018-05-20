// Vendor
import React from 'react';
import PropTypes from 'prop-types';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import * as moment from 'moment';

// Include the locale utils designed for moment
import MomentLocaleUtils from 'react-day-picker/moment';

// Make sure moment.js has the required locale data
import 'moment/locale/ru';

// Internal
import './styles.css';

// Setup

/**
 * @class RightSideBar
 * @description Brief description
 */
class RightSideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    // Chance to bind anything we need to.
    this.handleDayClick = this
      .handleDayClick
      .bind(this);
  }

  handleDayClick(day, {selected}) {
    let timeZoneFixedDate = moment({
      year: day.getFullYear(),
      month: day.getMonth(),
      day: day.getDate()
    });
    this
      .props
      .onDateChange(timeZoneFixedDate);
  }

  render() {
    const selectedDay = this
      .props
      .moment
      .toDate();
    return (
      <div className="right-side-bar"
        onClick={ this.onClick }>
        
        <DayPicker
          selectedDays={selectedDay}
          onDayClick={this.handleDayClick}
          localeUtils={MomentLocaleUtils}
          locale="ru" />  
      </div>
    );
  }
}

// Enforce required properies or methods
RightSideBar.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default RightSideBar;
