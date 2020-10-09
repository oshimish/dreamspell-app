import React, { useContext } from "react";
import DayPicker from "react-day-picker";

import "react-day-picker/lib/style.css";
import moment from "moment";

// Include the locale utils designed for moment
import MomentLocaleUtils from 'react-day-picker/moment';

// Make sure moment.js has the required locale data
import "moment/locale/ru";

// Internal
import { AppContext } from "../../Context/AppContextProvider";

// Setup

export function DatePicker() {
    const context = useContext(AppContext)!;

    return <DayPicker
        selectedDays={context.moment.toDate()}
        month={context.moment.toDate()}
        onDayClick={date => context.setDate(moment(date))}
        localeUtils={MomentLocaleUtils}
        locale="ru" />;
}
