import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from "./Layout.module.css";

export const TopHeader = () => {
  return (
    <Navbar sticky="top" expand="md" className={styles.topHeader}>
      <Navbar.Brand href="/">КтоТы</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto justify-content-start">
          <Nav.Link href="#/">Кин</Nav.Link>
          <Nav.Link href="#/tone">Тон</Nav.Link>
          <Nav.Link href="#/sign">Печать</Nav.Link>
          <Nav.Link href="#/plasma">Плазма</Nav.Link>
          <Nav.Link href="#/oracle">Оракул</Nav.Link>
          <Nav.Link href="#/zolkin">Цолькин</Nav.Link>
          <Nav.Link href="#/moon">Луна</Nav.Link>
          <Nav.Link href="#/wavespell">Волновой модуль</Nav.Link>
          <Nav.Link href="#/year">Год</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopHeader;
