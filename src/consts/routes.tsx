import React, { useEffect, useRef, useContext, Suspense } from "react";

import {
    KinPage, MoonPage, OraclePage, PlasmaPage,
    SignPage, TonePage, WaveSpellPage, YearPage, ZolkinPage
} from "Pages";
import { RouteProps } from "react-router";
import { AppContext, isKtotyHosted } from "Context";

const routes: {
    [name: string]: RouteProps & { href: string }
} = {
    kin: {
        path: "/kin",
        href: "#/kin",
        render: () => <KinPage />
    },
    tone: {
        path: "/tone",
        href: "#/tone",
        render: () => <TonePage />
    },
    sign: {
        path: "/sign",
        href: "#/sign",
        render: () => <SignPage />
    },
    plasma: {
        path: "/plasma",
        href: "#/plasma",
        render: () => <PlasmaPage />
    },
    oracle: {
        path: "/oracle",
        href: "#/oracle",
        render: () => <OraclePage />
    },
    zolkin: {
        path: "/zolkin",
        href: "#/zolkin",
        render: () => <ZolkinPage />
    },
    moon: {
        path: "/moon",
        href: "#/moon",
        render: () => <MoonPage />
    },
    wavespell: {
        path: "/wavespell",
        href: "#/wavespell",
        render: () => <WaveSpellPage />
    },
    // journey: {
    //     path: "/journey",
    //     href: "#/journey",
    //     render: () => <JourneyPage />
    // },
    year: {
        path: "/year",
        href: "#/year",
        render: () => <YearPage />
    }
}

if (isKtotyHosted() && routes.zolkin) {
    routes.zolkin.href = "#/tzolkin";
    routes.zolkin.path = "/tzolkin";
}

export default routes;