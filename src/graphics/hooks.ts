import { useContext, useEffect } from "react";
import * as g from 'dreamspell-math';
import { AppContext } from "../Context/AppContextProvider";
import { getGraphics, loadGraphics } from "graphics/loader";
import { DreamDate } from "dreamspell-math";
import env from "env";


export function useSelDate() {
    const context = useContext(AppContext)!;
    return context?.gdate ?? new DreamDate(new Date())
}

export function useKinGraphics(gdate: g.DreamDate) {
    const context = useContext(AppContext);
    const graphics = getGraphics(gdate, context?.theme!);
    return graphics;
}

export function useGraphics() {
    const context = useContext(AppContext);
    const graphics = loadGraphics(context?.theme! ?? env.defaultTheme);
    return graphics;
}