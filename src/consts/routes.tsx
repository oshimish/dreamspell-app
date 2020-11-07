import React, { useEffect, useRef, useContext, Suspense, ReactNode } from "react";

import {
    KinPage, MoonPage, OraclePage, PlasmaPage,
    SignPage, TonePage, WaveSpellPage, YearPage, ZolkinPage
} from "Pages";
import { AppContext, isKtotyHosted } from "Context";

const routes: {
    [name: string]: {
        path: string,
        href: string,
        component: ReactNode
    }
} = {
    kin: {
        path: "/kin",
        href: "#/kin",
        component: <KinPage />
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

if (isKtotyHosted() && routes.zolkin) {
    routes.zolkin.href = "#/tzolkin";
    routes.zolkin.path = "/tzolkin";
}

export default routes;