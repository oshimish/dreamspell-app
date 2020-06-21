// Vendor
import React, { useContext } from "react";


import NavDropdown from 'react-bootstrap/NavDropdown';
import DayPickerInput from "react-day-picker/DayPickerInput";

import "react-day-picker/lib/style.css";
import moment, { Moment } from "moment";

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
import Nav from "react-bootstrap/Nav";

const DropDownHeader = (props: {
  backClick?: () => void;
  fwdClick?: () => void;
}) => (
    <NavDropdown.Header>
      <ButtonGroup className="mx-auto">
        <Button variant="light" onClick={props.backClick} >&lt;</Button>
        <Button variant="light" onClick={props.fwdClick}>&gt;</Button>
      </ButtonGroup>
    </NavDropdown.Header>
  )

export const DateInput = (props: {
}) => {
  const context = useContext(AppContext)!;

  const setMoment = (day: Moment) => {
    // is it needed?
    let timeZoneFixedDate = moment({
      year: day.year(),
      month: day.month(),
      date: day.date()
    });
    context.setDate!(timeZoneFixedDate);
  };

  const selMoment = context.gdate.moment.clone();

  const daysInMonth = selMoment.daysInMonth() || 28;
  const days = Array.from(Array(daysInMonth), (e, i) => i + 1);

  const months = moment.localeData().months();
  //moment.localeData().monthsShort();

  const selYear = selMoment.year();
  const yearsToDisplay = 20;
  const years = Array.from(Array(yearsToDisplay), (e, i) => (selYear - yearsToDisplay / 2) + i + 1);


  const onDaySelect = (key: string) => { setMoment(selMoment.date(parseInt(key))) };
  const onMonthSelect = (key: string) => { setMoment(selMoment.month(parseInt(key))) };
  const onYearSelect = (key: string) => { setMoment(selMoment.year(parseInt(key))) };

  // moment().year(year).month(month).date(day)

  return (
    <Form inline className="date-nav">
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

      <NavDropdown title={selMoment.date()} id="day-nav-dropdown" className="date-nav-dropdown" alignRight>
        <DropDownHeader
          backClick={() => setMoment(selMoment.add("d", -1))}
          fwdClick={() => setMoment(selMoment.add("d", 1))} />
        <NavDropdown.Divider />
        <DropdownMenu className="scroll-menu" defaultValue={selMoment.date()}>
          {days.map((x, i) => (
            <NavDropdown.Item
              key={i}
              onSelect={onDaySelect}
              eventKey={x.toString()}
              active={selMoment.date() === x}>
              {x}
            </NavDropdown.Item>)
          )}
        </DropdownMenu>
      </NavDropdown>
      <NavDropdown title={selMoment.format("MMMM")} id="month-nav-dropdown" className="date-nav-dropdown" alignRight>
        <DropDownHeader
          backClick={() => setMoment(selMoment.add("months", -1))}
          fwdClick={() => setMoment(selMoment.add("months", 1))} />
        <NavDropdown.Divider />
        <DropdownMenu className="scroll-menu" defaultValue={selMoment.month()}>
          {months.map((x, i) => (
            <NavDropdown.Item
              key={i}
              onSelect={onMonthSelect}
              eventKey={i.toString()}
              active={selMoment.month() === i}
              className="text-left">
              <b>{(i + 1).toString()}</b> {x}
            </NavDropdown.Item>)
          )}
        </DropdownMenu>
      </NavDropdown>
      <NavDropdown title={selYear} id="year-nav-dropdown" className="date-nav-dropdown" alignRight>
        <DropDownHeader
          backClick={() => setMoment(selMoment.add("years", -10))}
          fwdClick={() => setMoment(selMoment.add("years", 10))} />
        <NavDropdown.Divider />
        <DropdownMenu className="scroll-menu" defaultValue={selYear}>
          {years.map((x, i) => (
            <NavDropdown.Item
              key={x}
              onSelect={onYearSelect}
              eventKey={x.toString()}
              active={selYear === x}>
              {x}
            </NavDropdown.Item>)
          )}
        </DropdownMenu>
      </NavDropdown>
    </Form>
  );
};
