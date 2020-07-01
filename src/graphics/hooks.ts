import { useContext, useEffect } from "react";
import * as g from 'dreamspell-math';
import { AppContext } from "../Context/AppContextProvider";
import { getGraphics, loadGraphics } from "graphics/loader";
import { DreamDate } from "dreamspell-math";

export function useSelDate() {
    const context = useContext(AppContext)!;
    return context?.gdate ?? new DreamDate(new Date())
}

export function useKinGraphics(gdate: g.DreamDate) {
    const graphics = getGraphics(gdate);
    return graphics;
}

export function useGraphics() {
    const graphics = loadGraphics();
    return graphics;
}