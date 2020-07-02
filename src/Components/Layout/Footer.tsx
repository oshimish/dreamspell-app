import React from "react";


import logo from "united-eath.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import ThemeSelect from 'Components/ThemeSelect/ThemeSelect';

export const Footer = () => (
    <div className="footer">
        <Navbar sticky="bottom"
            expand="lg"
            collapseOnSelect >
            <Navbar.Toggle aria-controls="footer-navbar-nav" />
            <Navbar.Brand
                href="https://www.law-of-time.ru"
                target="_blank"
                className="logo mx-1 mr-auto">
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top mx-2"
                    alt="Law Of Time"
                />
            </Navbar.Brand>
            <Navbar.Collapse id="footer-navbar-nav">
                <Navbar.Brand
                    href="https://www.law-of-time.ru"
                    target="_blank"
                    className="about mr-auto">
                    <div>По материалам Фонда Закона Времени.</div>
                    <div>Использована оргинальная работа @oshimish</div>
                </Navbar.Brand>
                <Navbar.Text className="about mr-auto">
                    <div>Единая Земля. Единое Время. Единое Человечество.</div>
                </Navbar.Text>
            </Navbar.Collapse>
            <Nav className="justify-content-end ">
                <ThemeSelect />
            </Nav>
        </Navbar>
    </div>
)