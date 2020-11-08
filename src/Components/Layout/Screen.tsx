import React, { useEffect, useContext } from "react";
import { HashRouter as Router } from "react-router-dom";
import classNames from 'classnames';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TopHeader } from ".";
import { Sidebar } from "./Sidebar";
import { AppContext } from "../../Context";
import { DatePicker } from '../DateInput/DatePicker';
import { useTranslation } from "react-i18next";
import { Footer } from './Footer';
import RoutesView from './RoutesView';


export function Screen() {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { i18n } = useTranslation();

    // useEffect(() => {
    // i18n.changeLanguage(i18n.language);
    // }, [i18n])
    // const keyDivRef = useRef<HTMLDivElement>(null);
    const context = useContext(AppContext)!;

    // useEffect(() => {
    //   keyDivRef.current?.focus();
    // }, [keyDivRef])
    useEffect(() => {
        const body = document.getElementsByTagName("body")[0];
        body.className = classNames({ ktoty: context.ktoty });
    }, [context, context.ktoty]);


    // const onKeyDown = (e: React.KeyboardEvent) => {
    //   if (e.keyCode === 37 /* left arrow*/) {
    //     context && context.dec();
    //   } else if (e.keyCode === 39 /* right arrow*/) {
    //     context && context.inc();
    //   }
    // };
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <TopHeader />
            <Container fluid className="main">
                <Row className="justify-content-around h-100">
                    <Col md="2" className="align-self-stretch  m-2 d-none d-lg-block">
                        <Sidebar />
                    </Col>
                    <Col md="6" className="align-self-stretch mx-auto my-2 my-xl-4 text-center col-xl-8">
                        <RoutesView />
                    </Col>
                    <Col md="auto" className="align-self-start d-none d-lg-block ml-auto my-4">
                        <DatePicker />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Router>
    );
}
