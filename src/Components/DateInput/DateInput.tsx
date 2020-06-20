// Vendor
import React, { useContext } from "react";


import NavDropdown from 'react-bootstrap/NavDropdown';
import DayPickerInput from "react-day-picker/DayPickerInput";

import "react-day-picker/lib/style.css";
import moment from "moment";

// Include the locale utils designed for moment
import MomentLocaleUtils from 'react-day-picker/moment';

// Make sure moment.js has the required locale data
import "moment/locale/ru";

// Internal
import "./styles.scss";
import { AppContext } from "Context/AppContextProvider";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import DropdownMenu from "react-bootstrap/DropdownMenu";

const DropDownHeader = () => (
  <NavDropdown.Header>
    <ButtonGroup className="mx-auto">
      <Button variant="light">&lt;</Button>
      <Button variant="light">&gt;</Button>
    </ButtonGroup>
  </NavDropdown.Header>
)

export const DateInput = (props: {
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

  const daysInMonth = selectedDay.moment.daysInMonth();
  const days = Array.from(Array(daysInMonth), (e, i) => i + 1);

  const months = moment.localeData().months();
  //moment.localeData().monthsShort();

  const selYear = selectedDay.moment.year();
  const yearsToDisplay = 20;
  const years = Array.from(Array(yearsToDisplay), (e, i) => (selYear - yearsToDisplay / 2) + i + 1);


  // const onMonthClick = (e) => { };
  // moment().year(year).month(month).date(day)
  return (
    <>
      {/* <Form inline>
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
              className: "form-control mr-sm-2"
            }}
          />
        </div>
      </Form> */}

      <NavDropdown title="19" id="day-nav-dropdown" className="date-nav-dropdown">
        <DropDownHeader />
        <NavDropdown.Divider />
        <DropdownMenu className="scroll-menu">
          {days.map((x, i) => (<NavDropdown.Item onClick={() => { }} eventKey={i.toString()}>{x}</NavDropdown.Item>))}
        </DropdownMenu>
      </NavDropdown>
      <NavDropdown title="Июня" id="month-nav-dropdown" className="date-nav-dropdown">
        <DropDownHeader />
        <NavDropdown.Divider />
        <DropdownMenu className="scroll-menu">
          {months.map((x, i) => (<NavDropdown.Item onClick={() => { }} eventKey={i.toString()}>{x}</NavDropdown.Item>))}
        </DropdownMenu>
      </NavDropdown>
      <NavDropdown title="2020" id="year-nav-dropdown" className="date-nav-dropdown">
        <DropDownHeader />
        <NavDropdown.Divider />
        <DropdownMenu className="scroll-menu">
          {years.map((x, i) => (<NavDropdown.Item onClick={() => { }} eventKey={i.toString()}>{x}</NavDropdown.Item>))}
        </DropdownMenu>
      </NavDropdown>
    </>
  );
};
