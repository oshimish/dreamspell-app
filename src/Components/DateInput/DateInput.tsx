// Vendor
import React, { useContext } from "react";

import DayPicker from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";

import "react-day-picker/lib/style.css";
import moment, { Moment } from "moment";

// Include the locale utils designed for moment
import MomentLocaleUtils from 'react-day-picker/moment';

// Make sure moment.js has the required locale data
import "moment/locale/ru";

// Internal
import "./styles.css";
import { AppContext } from "Context/AppContextProvider";

export const DateInput = (props: {
  className?: string
}) => {
  const context = useContext(AppContext)!;

  const handleDayClick = (day: Date) => {
    let timeZoneFixedDate = moment({
      year: day.getFullYear(),
      month: day.getMonth(),
      day: day.getDate()
    });
    context.setDate!(timeZoneFixedDate);
  };

  const selectedDay = context.gdate;

  return (
    <div className="date-input">
      <DayPickerInput
        onDayChange={handleDayClick}
        value={selectedDay.moment.toDate()}
        format={"LL"}
        formatDate={MomentLocaleUtils.formatDate}
        parseDate={MomentLocaleUtils.parseDate}

        // showOverlay={true}
        dayPickerProps={{
          locale: "ru",
          localeUtils: MomentLocaleUtils
        }}
        inputProps={{
          className: props.className
        }}
      />
    </div>
  );
};
