// Vendor
import React from 'react';


import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';
import moment from 'moment';

// Include the locale utils designed for moment
//import MomentLocaleUtils from 'react-day-picker/moment';

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
      selectedDays={props.context.moment.toDate()}
      onDayClick={(date) => props.context.setDate(moment(date))}
      //localeUtils={MomentLocaleUtils}
      locale="ru" />
  </div>
})


export default RightSideBar;
