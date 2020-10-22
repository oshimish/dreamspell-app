import React, { useState } from 'react';
import SwipeableViews, { SwipeableViewsProps } from 'react-swipeable-views';
import { virtualize, bindKeyboard, WithBindKeyboardProps, SlideRenderProps } from 'react-swipeable-views-utils';

import SwipeableRoutes from "react-swipeable-routes";
import { Route } from 'react-router-dom';
import routes from 'consts/routes';


const VirtualizeSwipeableViews = virtualize(SwipeableViews);

const slideRenderer = (props: SlideRenderProps) => (
    <div key={props.key}>
        {`slide n°${props.index + 1}`}
        {Object.entries(routes).map((route, i) => {
            const p = route[1];
            return (
                <Route key={i} {...p} />
            )
        })}
    </div>
);

const BindKeyboardSwipeableViews = bindKeyboard(VirtualizeSwipeableViews);

const SwipeView = (props: SwipeableViewsProps & WithBindKeyboardProps) => (
    <VirtualizeSwipeableViews slideRenderer={slideRenderer} {...props} />
);

export const SwipeableRoutesView = (props: Partial<SwipeableViewsProps>) => (
    <SwipeableRoutes enableMouseEvents >
        {Object.entries(routes).map((route, i) => {
            const p = route[1];
            return (
                <Route key={i} {...p} />
            )
        })}
    </SwipeableRoutes >
);

const onChangeIndex = (index: number, indexLatest: number) => { };

export const SwipeRouteView = (props: Partial<SwipeableViewsProps>) => {
    const [index, setIndex] = useState(0);
    return (
        <SwipeView index={index} onChangeIndex={setIndex} enableMouseEvents >
            {Object.entries(routes).map((route, i) => {
                const p = route[1];
                return (
                    <Route key={i} {...p} />
                )
            })}
        </SwipeView >
    )
};

export default SwipeView;