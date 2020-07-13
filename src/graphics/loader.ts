//  babel macro used
import requireContext from 'require-context.macro';
import { GraphicTheme, GraphicRef } from 'consts/GraphicTheme';
import { Kin, Tone, Sign } from 'dreamspell-math';

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


export const initGraphics = (theme: GraphicTheme): {
    getPlasma: (plasma: number) => GraphicRef,
    getTone: (tone: Tone) => GraphicRef,
    getSign: (sign: Sign) => GraphicRef,
    getKin?: (kin: Kin) => GraphicRef,
} => {
    switch (theme) {
        case GraphicTheme.Classic:
            {
                const plasmas = importAll(requireContext('./classic/plasmas', false, /\.(png|jpe?g|svg)$/));
                const signs = importAll(requireContext('./classic/signs', false, /\.(png|jpe?g|svg)$/));
                const tones = importAll(requireContext('./classic/tones', false, /\.(png|jpe?g|svg)$/));
                return {
                    getPlasma: (plasma: number) => {
                        return {
                            active: plasmas[(plasma + 1) + 'X.png']
                        }
                    },
                    getTone: (tone: Tone) => {
                        return {
                            active: tones['tone' + (tone.number ?? 13) + '.png']
                        }
                    },
                    getSign: (sign: Sign) => {
                        return {
                            active: signs[((sign.number === 20) ? 0 : sign.number) + 'y.png']
                        };
                    }
                };
            }

        case GraphicTheme.Tzolkine:
            {
                const plasmas = importAll(requireContext('./tzolkine/plasmas', false, /\.(png|jpe?g|svg)$/));
                const tones = importAll(requireContext('./tzolkine/tones', false, /\.(png|jpe?g|svg)$/));
                const kins = importAll(requireContext('./tzolkine-normal/signs', false, /\.(png|jpe?g|svg)$/));

                const kinsKeys = Object.keys(kins);

                const getSign = (sign: Sign) => {
                    let signNum = sign.number;
                    const sign00 = (signNum || 20).toString().padStart(2, '0');
                    const found = kinsKeys.find(k => new RegExp(`_${sign00}-.+-s.svg$`).test(k))!;
                    //console.log('sign', sign, 'found:', found, ':', kins[found]);
                    return {
                        active: kins[found]
                    };
                }


                return {
                    getPlasma: (plasma: number) => {
                        return {
                            active: plasmas['plasma' + ((plasma + 1) ?? 7) + '.svg']
                        }
                    },
                    getTone: (tone: Tone) => {
                        return {
                            active: tones['Tone' + ((tone.number) || 13).toString().padStart(2, '0') + '.svg']
                        }
                    },
                    getSign
                };
            }

        // case GraphicTheme.TzolkineGreen:
        //     {
        //         const plasmas = importAll(requireContext('./tzolkine/plasmas', false, /\.(png|jpe?g|svg)$/));
        //         const signs = importAll(requireContext('./classic/signs', false, /\.(png|jpe?g|svg)$/));
        //         const tones = importAll(requireContext('./tzolkine/tones', false, /\.(png|jpe?g|svg)$/));

        //         const ret = {
        //             plasmas: Array.from(Array<number>(7).keys()).map((plasma) => plasmas['plasma' + (plasma) + '.png']),
        //             tones: Array.from(Array<number>(13).keys()).map((tone) => tones['Tone' + (tone + 1).toString().padStart(2, '0') + '.png']),
        //             signs: Array.from(Array<number>(20).keys()).map((sign) => signs[(sign) + 'y.png']),
        //         }
        //         return ret;
        //     }
    }
    throw new Error(`theme ${theme} not configured`)
}