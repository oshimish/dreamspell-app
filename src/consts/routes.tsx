import React, { useEffect, useRef, useContext, Suspense } from "react";

import {
    JourneyPage, KinPage, MoonPage, OraclePage, PlasmaPage,
    SignPage, TonePage, WaveSpellPage, YearPage, ZolkinPage
} from "Pages";
import { RouteProps } from "react-router";
import { dreamdate } from "dreamspell-math";
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
        render: () => <TonePage gdate={dreamdate(Date.now)} />
    },
    sign: {
        path: "/sign",
        href: "#/sign",
        render: () => <SignPage gdate={dreamdate(Date.now)} />
    },
    plasma: {
        path: "/plasma",
        href: "#/plasma",
        render: () => <PlasmaPage gdate={dreamdate(Date.now)} />
    },
    oracle: {
        path: "/oracle",
        href: "#/oracle",
        render: () => <OraclePage gdate={dreamdate(Date.now)} />
    },
    zolkin: {
        path: "/zolkin",
        href: "#/zolkin",
        render: () => <ZolkinPage gdate={dreamdate(Date.now)} />
    },
    moon: {
        path: "/moon",
        href: "#/moon",
        render: () => <MoonPage gdate={dreamdate(Date.now)} />
    },
    wavespell: {
        path: "/wavespell",
        href: "#/wavespell",
        render: () => <WaveSpellPage gdate={dreamdate(Date.now)} />
    },
    journey: {
        path: "/journey",
        href: "#/journey",
        render: () => <JourneyPage />
    },
    year: {
        path: "/year",
        href: "#/year",
        render: () => <YearPage gdate={dreamdate(Date.now)} />
    }
}

if (isKtotyHosted() && routes.zolkin) {
    routes.zolkin.href = "#/tzolkin";
    routes.zolkin.path = "/tzolkin";
}

export default routes;