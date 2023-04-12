import React, { useState } from 'react';

import { Route } from 'react-router-dom';

import routes from 'consts/routes';
import PageView from './PageView';
import i18n from 'i18n';

export const RoutesView = () => (
    <>
        {Object.entries(routes).map((route, i) => {
            const p = route[1];
            return (
                <Route key={route[0]}
                    path={route[1].path}
                    render={() => {
                        return (
                            <PageView
                                key={route[0]}
                                header={i18n.t("routes." + route[0])}
                                children={p.component}
                            />
                        )
                    }} />
            )
        })}
    </>
);

export default RoutesView; 