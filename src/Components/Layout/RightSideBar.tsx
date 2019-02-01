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
import { DateInput } from '../DateInput/DateInput';
import { withAppContext, IWithAppContextProps } from '../../Context/AppContextProvider';
// Setup

export const RightSideBar = withAppContext((props: IWithAppContextProps) => {

  return <div className="right-side-bar">
    <DateInput
      date={props.context.moment}
      setDate={props.context.setDate} />

    <DayPicker
      selectedDays={props.context.moment}
      onDayClick={props.context.setDate}
      localeUtils={MomentLocaleUtils}
      locale="ru" />
  </div>
})


export default RightSideBar;
