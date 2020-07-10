import React, { useContext } from "react";
import DayPicker from "react-day-picker";

import "react-day-picker/lib/style.css";
import moment from "moment";

// Include the locale utils designed for moment
import MomentLocaleUtils from 'react-day-picker/moment';
import InfiniteCalendar from 'react-infinite-calendar';

// Make sure moment.js has the required locale data
import "moment/locale/ru";

// Internal
import { AppContext } from "../../Context/AppContextProvider";
import { dreamdate, Colors } from "dreamspell-math";

// Setup

export function DatePicker() {
    const context = useContext(AppContext)!;

    return <>
        <InfiniteCalendar
            width={400}
            height={600}
            display="years"
            selected={context.moment.toDate()}

            onSelect={(date: Date) => context.setDate(moment(date))}
            // disabledDays={[0, 6]}
            // minDate={lastWeek}
            locale={{
                locale: require('date-fns/locale/ru'),
                headerFormat: 'dddd, D MMM',
                weekdays: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
                blank: 'Aucune date selectionnee',
                todayLabel: {
                    long: 'Aujourd\'hui'
                },
                weekStartsOn: 5 // for magnetic wizard
            }}
            theme={{
                selectionColor: ((date: Date): string => {
                    const gdate = dreamdate(date);
                    switch (gdate.kin.color) {
                        case Colors.Red: return 'red';
                        case Colors.White: return 'white';
                        case Colors.Blue: return 'blue';
                        case Colors.Yellow: return 'yellow';
                    }
                    return "black";
                }) as any,
                // selectionColor: 'rgb(146, 118, 255)',
                textColor: {
                    default: '#333',
                    active: '#FFF'
                },
                // weekdayColor: 'rgb(146, 118, 255)',
                // headerColor: 'rgb(127, 95, 251)',
                // floatingNav: {
                //     background: 'rgba(81, 67, 138, 0.96)',
                //     color: '#FFF',
                //     chevron: '#FFA726'
                // }
            }}
        />
        {/* <DayPicker
        selectedDays={context.moment.toDate()}
        month={context.moment.toDate()}
        onDayClick={date => context.setDate(moment(date))}
        localeUtils={MomentLocaleUtils}
            locale="ru" /> */}
    </>;
}
