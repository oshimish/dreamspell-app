//  babel macro used
import requireContext from 'require-context.macro';
import * as g from 'dreamspell-math';

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

const mediaExts = /\.(png|jpe?g|svg)$/;
const plasmas = importAll(requireContext('./tzolkine/plasmas', false, mediaExts));
const tones = importAll(requireContext('./tzolkine/tones', false, mediaExts));
const signs = importAll(requireContext('./classic/signs', false, mediaExts));
const kins = importAll(requireContext('./tzolkine-normal/kins', false, mediaExts));
const kinsInactive = importAll(requireContext('./tzolkine-normal/kins/inactive', false, mediaExts));


export enum GraphicTheme {
    Classic = 'Classic',
    Tzolkine = 'Tzolkine'
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
}

const DefaultTheme = GraphicTheme.Classic;

export const loadGraphics = (graphics?: GraphicTheme): {
    plasmas: {
        [key in number]: any
    },
    tones?: {
        [key in number]: any
    },
    signs?: {
        [key in number]: any
    },
    kins?: {
        [key in number]: any
    },
} => {
    graphics = graphics ?? DefaultTheme;

    switch (graphics) {
        case GraphicTheme.Classic:
            const plasmas = importAll(requireContext('./classic/plasmas', false, mediaExts));
            const signs = importAll(requireContext('./classic/signs', false, mediaExts));
            const tones = importAll(requireContext('./classic/tones', false, mediaExts));

            return {
                plasmas: Array.from(Array<number>(7).keys()).map((plasma) => plasmas[plasma + 'X.png']),
                tones: Array.from(Array<number>(13).keys()).map((tone) => tones['tone' + tone + '.png']),
                signs: Array.from(Array<number>(20).keys()).map((sign) => signs[sign + 'Y.png']),
            }

        case GraphicTheme.Tzolkine:
            const plasmas2 = importAll(requireContext('./tzolkine/plasmas', false, mediaExts));

            return {
                plasmas: Array.from(Array<number>(7).keys()).map((plasma) => plasmas2[plasma + '.png']),
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

