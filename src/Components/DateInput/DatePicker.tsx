import React, { useContext } from "react";
import { DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";
import moment from "moment";

// Include the locale utils designed for moment

// Make sure moment.js has the required locale data
import "moment/locale/ru";

// Internal
import { AppContext } from "../../Context/AppContextProvider";

// Setup

export function DatePicker() {
    const context = useContext(AppContext)!;

    return <DayPicker
        selected={context.moment.toDate()}
        month={context.moment.toDate()}
        onDayClick={date => context.setDate(moment(date))}
    />;
}
