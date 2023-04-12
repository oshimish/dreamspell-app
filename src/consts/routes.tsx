import React, { useEffect, useRef, useContext, Suspense, ReactNode } from "react";

import {
    KinPage, MoonPage, OraclePage, PlasmaPage,
    SignPage, TonePage, WaveSpellPage, YearPage, ZolkinPage
} from "Pages";

const routes: {
    [name: string]: {
        path: string,
        href: string,
        component: ReactNode,
        thumb?: ReactNode
    }
} = {
    kin: {
        path: "/kin",
        href: "#/kin",
        component: <KinPage />,
        // thumb: <Kin />
    },
    tone: {
        path: "/tone",
        href: "#/tone",
        component: <TonePage />
    },
    sign: {
        path: "/sign",
        href: "#/sign",
        component: <SignPage />
    },
    plasma: {
        path: "/plasma",
        href: "#/plasma",
        component: <PlasmaPage />
    },
    oracle: {
        path: "/oracle",
        href: "#/oracle",
        component: <OraclePage />
    },
    zolkin: {
        path: "/zolkin",
        href: "#/zolkin",
        component: <ZolkinPage />
    },
    moon: {
        path: "/moon",
        href: "#/moon",
        component: <MoonPage />
    },
    wavespell: {
        path: "/wavespell",
        href: "#/wavespell",
        component: <WaveSpellPage />
    },
    // journey: {
    //     path: "/journey",
    //     href: "#/journey",
    //     component: <JourneyPage />
    // },
    year: {
        path: "/year",
        href: "#/year",
        component: <YearPage />
    }
}

export default routes;