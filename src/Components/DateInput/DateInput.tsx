// Vendor
import React from 'react';

import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';


import 'react-day-picker/lib/style.css';
import moment, { Moment } from 'moment';

// Include the locale utils designed for moment
//import MomentLocaleUtils from 'react-day-picker/moment';

// Make sure moment.js has the required locale data
import 'moment/locale/ru';

// Internal
import './styles.css';
import { DateUtils } from 'react-day-picker/types/utils';
import { AppContext, withAppContext, IWithAppContextProps } from '../../Context/AppContextProvider';


export class DateInput extends React.Component<{
  date: Moment,
  setDate?: (date: Moment) => void;
}> {

  handleDayClick = (day: Date) => {
    let timeZoneFixedDate = moment({
      year: day.getFullYear(),
      month: day.getMonth(),
      day: day.getDate()
    });
    this.props.setDate!(timeZoneFixedDate);
  }

  render() {
    const selectedDay = this.props.date;
    return (
      <div className="date-input">
        <DayPickerInput onDayChange={this.handleDayClick} value={selectedDay.toDate()} format={moment.defaultFormat} />
      </div>
    );
  }
}

