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
                const kins = importAll(requireContext('./tzolkine-normal/kins', false, /\.(png|jpe?g|svg)$/));
                const kinsInactive = importAll(requireContext('./tzolkine-normal/kins/inactive', false, /\.(png|jpe?g|svg)$/));

                const kinsKeys = Object.keys(kins);
                const kinsInactiveKeys = Object.keys(kinsInactive);
                const getSign = (sign: Sign) => {
                    let signNum = sign.number;
                    // hack: blue storm and white mirror is replaced
                    if (signNum === 19) {
                        signNum = 18;
                    } else if (signNum === 18) {
                        signNum = 19;
                    }
                    const sign00 = (sign.number || 20).toString().padStart(2, '0');
                    const found = kinsKeys.find(k => new RegExp(`_${(signNum || 20).toString().padStart(2, '0')}-.+-s.png$`).test(k))!;
                    const foundInactive = kinsInactiveKeys.find(k => new RegExp(`-inactive_${sign00}-.+-s.png$`).test(k))!;
                    //console.log('sign', sign, 'found:', found, ':', kins[found]);
                    return {
                        active: kins[found],
                        inactive: kinsInactive[foundInactive]
                    };
                }
                const getKin = (kin: Kin) => {
                    let signNum = kin.sign.number;
                    // hack: blue storm and white mirror is replaced
                    if (signNum === 19) {
                        signNum = 18;
                    } else if (signNum === 18) {
                        signNum = 19;
                    }
                    const sign00 = (signNum || 20).toString().padStart(2, '0');
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

                return {
                    getPlasma: (plasma: number) => {
                        return {
                            active: plasmas['plasma' + ((plasma + 1) ?? 7) + '.png']
                        }
                    },
                    getTone: (tone: Tone) => {
                        return {
                            active: tones['Tone' + ((tone.number) || 13).toString().padStart(2, '0') + '.png']
                        }
                    },
                    getSign,
                    getKin
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