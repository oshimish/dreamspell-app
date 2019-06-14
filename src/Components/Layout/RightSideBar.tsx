// Vendor
import React, { useContext } from "react";

import DayPicker from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";

import "react-day-picker/lib/style.css";
import moment from "moment";

// Include the locale utils designed for moment
//import MomentLocaleUtils from 'react-day-picker/moment';

// Make sure moment.js has the required locale data
import "moment/locale/ru";

// Internal
import { DateInput } from "../DateInput/DateInput";
import { AppContext } from "../../Context/AppContextProvider";
// Setup

export const RightSideBar = () => {
  const context = useContext(AppContext)!;

  return (
    <div className="right-side-bar">
      <DayPicker
        selectedDays={context.moment.toDate()}
        onDayClick={date => context.setDate(moment(date))}
        //localeUtils={MomentLocaleUtils}
        locale="ru"
      />
    </div>
  );
};

export default RightSideBar;
