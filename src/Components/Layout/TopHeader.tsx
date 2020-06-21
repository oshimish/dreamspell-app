import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import styles from "./Layout.module.css";
import { DateInput } from 'Components/DateInput/DateInput';

import logo from "logo.png";
import env from "env";

export const TopHeader = () => {

  const darkTheme = env.lawoftime;

  return (
    <Navbar sticky="top"
      bg={darkTheme ? "dark" : ""}
      variant={darkTheme ? "dark" : undefined} expand="lg"
      className={styles.topHeader} collapseOnSelect >

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {env.lawoftime &&
        <>
          <Navbar.Brand href="https://www.law-of-time.ru"
            className="mx-1">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top mx-2"
              alt="Law Of Time"
            />
          </Navbar.Brand>
          <Navbar.Brand href="/" className="mr-auto">
            ДримСпелл
            </Navbar.Brand>
        </>
      }

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav fill className="my-2">
          <Nav.Link href="#/kin">Кин</Nav.Link>
          <Nav.Link href="#/tone">Тон</Nav.Link>
          <Nav.Link href="#/sign">Печать</Nav.Link>
          <Nav.Link href="#/plasma">Плазма</Nav.Link>
          <Nav.Link href="#/oracle">Оракул</Nav.Link>
          <Nav.Link href="#/tzolkin">Цолькин</Nav.Link>
          <Nav.Link href="#/moon">Луна</Nav.Link>
          <Nav.Link href="#/wavespell">Волновой&nbsp;модуль</Nav.Link>
          <Nav.Link href="#/year">Год</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <DateInput />
    </Navbar>
  );
};

export default TopHeader;
