import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

import styles from "./Layout.module.css";
import { DateInput } from 'Components/DateInput/DateInput';

export const TopHeader = () => {
  return (
    <Navbar sticky="top" expand="lg" className={styles.topHeader} collapseOnSelect >

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* <Navbar.Brand href="/">ДримСпелл</Navbar.Brand> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto justify-content-start">
          <Nav.Link href="#/">Кин</Nav.Link>
          <Nav.Link href="#/tone">Тон</Nav.Link>
          <Nav.Link href="#/sign">Печать</Nav.Link>
          <Nav.Link href="#/plasma">Плазма</Nav.Link>
          <Nav.Link href="#/oracle">Оракул</Nav.Link>
          <Nav.Link href="#/zolkin">Цолькин</Nav.Link>
          <Nav.Link href="#/moon">Луна</Nav.Link>
          <Nav.Link href="#/wavespell">Волновой&nbsp;модуль</Nav.Link>
          <Nav.Link href="#/year">Год</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Form inline>
        <DateInput className="form-control mr-sm-2" />
      </Form>
    </Navbar>
  );
};

export default TopHeader;
