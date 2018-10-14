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
import './styles.css';
import { subscribe } from 'react-contextual';

export @subscribe class DateInput extends React.Component {

  handleDayClick = (day, { selected }) => {
    let timeZoneFixedDate = moment({
      year: day.getFullYear(),
      month: day.getMonth(),
      day: day.getDate()
    });
    this.props.setDate(timeZoneFixedDate);
  }

  render() {
    const selectedDay = this.props.moment.toDate();
    return (
      <div className="date-input"
        onClick={this.onClick}>
        <DayPickerInput onDayChange={this.handleDayClick} value={selectedDay} />

      </div>
    );
  }
}

DateInput.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default DateInput;
