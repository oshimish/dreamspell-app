import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import styles from "./Layout.module.css";
import { DateInput } from 'Components/DateInput/DateInput';

import logo from "logo.png";
import routes from "consts/routes";
import { useAppContext } from "Context";
import i18n from "i18n";

export const TopHeader = () => {

  var context = useAppContext();

  return (
    <Navbar
      bg={context.darkTheme ? "dark" : ""}
      variant={context.darkTheme ? "dark" : undefined}
      expand="md"
      className={styles.topHeader}
      collapseOnSelect >

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {context.lawoftime &&
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
            Dream Spell
          </Navbar.Brand>
        </>
      }

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav fill className="my-2">
          {Object.entries(routes).map((route, i) => {
            const p = route[1];
            return (
              <Nav.Link href={p.href}>{i18n.t("routes." + route[0])}</Nav.Link>
            )
          })}
        </Nav>
      </Navbar.Collapse>
      <DateInput />
    </Navbar>
  );
};

export default TopHeader;
