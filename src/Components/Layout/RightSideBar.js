// Vendor
import React from 'react';
import PropTypes from 'prop-types';

import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';
import * as moment from 'moment';

// Include the locale utils designed for moment
import MomentLocaleUtils from 'react-day-picker/moment';

// Make sure moment.js has the required locale data
import 'moment/locale/ru';

// Internal
import DateInput from '../DateInput/DateInput';

// Setup

/**
 * @class RightSideBar
 * @description Brief description
 */
export class RightSideBar extends React.Component {
  static propTypes = {
    // active: React.PropTypes.bool.isRequired
  };

  state = {}

  handleDayClick = (day, { selected }) => {
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
    const selectedDay = null;//this.props.moment.toDate();
    return (
      <div className="right-side-bar"
        onClick={this.onClick}>
        <DateInput onDayChange={this.handleDayClick} {...this.props} />

        <DayPicker
          selectedDays={selectedDay}
          onDayClick={this.handleDayClick}
          localeUtils={MomentLocaleUtils}

          locale="ru" />
      </div>
    );
  }
}

export default RightSideBar;
