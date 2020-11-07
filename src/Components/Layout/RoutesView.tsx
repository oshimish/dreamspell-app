import React, { useState } from 'react';
import SwipeableViews, { SwipeableViewsProps } from 'react-swipeable-views';
import { virtualize, bindKeyboard, WithBindKeyboardProps, SlideRenderProps } from 'react-swipeable-views-utils';

import SwipeableRoutes from "react-swipeable-routes";
import { Route } from 'react-router-dom';
import routes from 'consts/routes';
import PageView from './PageView';
import i18n from 'i18n';


const VirtualizeSwipeableViews = virtualize(SwipeableViews);

const slideRenderer = (props: SlideRenderProps) => (
    <div key={props.key}>
        {/* {Object.entries(routes).map((route, i) => {
            const p = route[1];
            return (
                <Route key={route[0]} {...p} />
            )
        })} */}
    </div>
);

const BindKeyboardSwipeableViews = bindKeyboard(VirtualizeSwipeableViews);

const SwipeView = (props: SwipeableViewsProps & WithBindKeyboardProps) => (
    <VirtualizeSwipeableViews slideRenderer={slideRenderer} {...props} />
);

export const RoutesView = () => (
    <>
        {Object.entries(routes).map((route, i) => {
            const p = route[1];
            return (
                <Route key={route[0]}
                    path={route[1].path}
                    href={route[1].href}
                    render={() => {
                        return (
                            <PageView
                                key={route[0]}
                                header={i18n.t("routes." + route[0])}
                                children={p.component}
                            />
                        )
                    }
                    } />
            )
        })}
    </>
);

export const SwipeableRoutesView = (props: Partial<SwipeableViewsProps>) => (
    <SwipeableRoutes enableMouseEvents >
        <RoutesView />
    </SwipeableRoutes >
);

export default RoutesView; 