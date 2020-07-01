//  babel macro used
import requireContext from 'require-context.macro';
import * as g from 'dreamspell-math';
import env from 'env';

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


export enum GraphicTheme {
    Classic = 'Classic',
    Tzolkine = 'Tzolkine',
    TzolkineGreen = 'TzolkineGreen'
}

type GraphicThemesData = {
    [key in GraphicTheme]: {
        name: string
    }
};

export const GraphicThemes: GraphicThemesData = {

    'Classic': {
        name: "Classic",
    },
    'Tzolkine': {
        name: "Tzolkine",
    },
    'TzolkineGreen': {
        name: "Tzolkine Green",
    },
}

const DefaultTheme = env.ktoty ? GraphicTheme.Tzolkine : GraphicTheme.Classic;

export const loadGraphics = (graphics?: GraphicTheme): {
    plasmas: {
        [key in number]: any
    },
    tones: {
        [key in number]: any
    },
    signs: {
        [key in number]: any
    },
    kins?: {
        [key in number]: any
    },
} => {
    graphics = graphics ?? DefaultTheme;

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
                const kinsKeys = Object.keys(kins);
                const getSign = (sign: number) => {
                    // hack: red moon is missing
                    if (sign === 9) {
                        return kins['Symbols-tzolkine-normal_09-red-moon-tzolkine-tone01.png'];
                    }
                    return kins[kinsKeys.find(k => new RegExp(`_${(sign || 20).toString().padStart(2, '0')}-.+-s.png$`).test(k))!];
                }
                const kinsInactive = importAll(requireContext('./tzolkine-normal/kins/inactive', false, /\.(png|jpe?g|svg)$/));
                const tones = importAll(requireContext('./tzolkine/tones', false, /\.(png|jpe?g|svg)$/));

                const ret = {
                    plasmas: Array.from(Array<number>(7).keys()).map((plasma) => plasmas['plasma' + ((plasma + 1) ?? 7) + '.png']),
                    tones: Array.from(Array<number>(13).keys()).map((tone) => tones['Tone' + ((tone + 1) || 13).toString().padStart(2, '0') + '.png']),
                    signs: Array.from(Array<number>(20).keys()).map((sign) => getSign(sign)),
                    // kins: Array.from(Array<number>(260).keys()).map((sign) => signs[(sign) + 'y.png']),
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

export const getGraphics = (date: g.DreamDate, theme?: GraphicTheme): {
    plasma: any,
    sign?: any,
    tone?: any,
    kin?: any
} => {
    theme = theme ?? DefaultTheme;

    const graphics = loadGraphics(theme);
    return {
        plasma: graphics.plasmas[date.plasma]
    };
}


// export const loadGraphics = () => {
//     return {
//         signs,
//         tones,
//         kins,
//         kinsInactive
//     }
// }

