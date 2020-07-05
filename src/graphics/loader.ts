//  babel macro used
import requireContext from 'require-context.macro';
import * as g from 'dreamspell-math';
import { GraphicTheme } from 'consts/GraphicTheme';
import { Kin } from 'dreamspell-math';

function importAll(contextLoader: __WebpackModuleApi.RequireContext): {
    [key: string]: any
} {
    let images: {
        [key: string]: any
    } = {};
    contextLoader.keys().map((id, index) => {
        const asset = contextLoader(id);
        const key = id.replace('./', '');
        //console.log(key, '\t --> ', asset);
        return (images)[key] = asset;
    });
    return images;
}

type graphicSrc = string | {
    inactive: string,
    active: string
}

export const loadGraphics = (graphics: GraphicTheme): {
    plasmas: {
        [key in number]: any
    },
    tones: {
        [key in number]: any
    },
    signs: {
        [key in number]: graphicSrc
    },
    kins?: {
        [key in number]: graphicSrc
    },
} => {
    switch (graphics) {
        case GraphicTheme.Classic:
            {
                const plasmas = importAll(requireContext('./classic/plasmas', false, /\.(png|jpe?g|svg)$/));
                const signs = importAll(requireContext('./classic/signs', false, /\.(png|jpe?g|svg)$/));
                const tones = importAll(requireContext('./classic/tones', false, /\.(png|jpe?g|svg)$/));

                const ret = {
                    plasmas: Array.from(Array<number>(7).keys()).map((plasma) => plasmas[(plasma + 1) + 'X.png']),
                    tones: Array.from(Array<number>(13).keys()).map((tone) => tones['tone' + (tone + 1) + '.png']),
                    signs: Array.from(Array<number>(20).keys()).map((sign) => signs[(sign) + 'y.png']),
                }
                return ret;
            }

        case GraphicTheme.Tzolkine:
            {
                const plasmas = importAll(requireContext('./tzolkine/plasmas', false, /\.(png|jpe?g|svg)$/));
                const kins = importAll(requireContext('./tzolkine-normal/kins', false, /\.(png|jpe?g|svg)$/));
                const kinsInactive = importAll(requireContext('./tzolkine-normal/kins/inactive', false, /\.(png|jpe?g|svg)$/));

                const kinsKeys = Object.keys(kins);
                const kinsInactiveKeys = Object.keys(kinsInactive);
                const getSign = (sign: number) => {
                    // hack: blue storm and white mirror is replaced
                    if (sign === 19) {
                        sign = 18;
                    } else if (sign === 18) {
                        sign = 19;
                    }
                    const found = kinsKeys.find(k => new RegExp(`_${(sign || 20).toString().padStart(2, '0')}-.+-s.png$`).test(k))!;
                    //console.log('sign', sign, 'found:', found, ':', kins[found]);
                    return kins[found];
                }
                const getKin = (kin: Kin) => {
                    const sign00 = (kin.sign.number || 20).toString().padStart(2, '0');
                    const tone00 = (kin.tone.number || 13).toString().padStart(2, '0');
                    const found = kinsKeys.find(k => new RegExp(`_${sign00}-.+-tone${tone00}.png$`).test(k))!;
                    const foundInactive = kinsInactiveKeys.find(k => new RegExp(`-inactive_${sign00}-.+-tone${tone00}.png$`).test(k))!;
                    //console.log('kin', kin.number, 'found:', found, ':', kins[found], ' inactive:', foundInactive);
                    return {
                        active: kins[found],
                        inactive: kinsInactive[foundInactive]
                    };
                }
                const tones = importAll(requireContext('./tzolkine/tones', false, /\.(png|jpe?g|svg)$/));

                const ret = {
                    plasmas: Array.from(Array<number>(7).keys()).map((plasma) => plasmas['plasma' + ((plasma + 1) ?? 7) + '.png']),
                    tones: Array.from(Array<number>(13).keys()).map((tone) => tones['Tone' + ((tone + 1) || 13).toString().padStart(2, '0') + '.png']),
                    signs: Array.from(Array<number>(20).keys()).map((sign) => getSign(sign)),
                    kins: Array.from(Array<number>(260).keys()).map((kin) => getKin(g.kin(kin))),
                }
                return ret;
            }

        case GraphicTheme.TzolkineGreen:
            {
                const plasmas = importAll(requireContext('./tzolkine/plasmas', false, /\.(png|jpe?g|svg)$/));
                const signs = importAll(requireContext('./classic/signs', false, /\.(png|jpe?g|svg)$/));
                const tones = importAll(requireContext('./tzolkine/tones', false, /\.(png|jpe?g|svg)$/));

                const ret = {
                    plasmas: Array.from(Array<number>(7).keys()).map((plasma) => plasmas['plasma' + (plasma) + '.png']),
                    tones: Array.from(Array<number>(13).keys()).map((tone) => tones['Tone' + (tone + 1).toString().padStart(2, '0') + '.png']),
                    signs: Array.from(Array<number>(20).keys()).map((sign) => signs[(sign) + 'y.png']),
                }
                return ret;
            }
    }
}

export const getGraphics = (date: g.DreamDate, theme: GraphicTheme): {
    plasma: any,
    sign: any,
    tone: any,
    kin?: any
} => {
    const graphics = loadGraphics(theme);
    return {
        plasma: graphics.plasmas[date.plasma],

        sign: graphics.signs[date.kin.sign.number],
        tone: graphics.tones[date.kin.tone.number]
    };
}

