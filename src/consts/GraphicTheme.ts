export enum GraphicTheme {
    Classic = 'Classic',
    Tzolkine = 'Tzolkine',
    TzolkineGreen = 'TzolkineGreen'
}

type GraphicThemesData = {
    [key in GraphicTheme]: {
        name: string,
        isDisabled?: boolean
    }
};

export const ThemesConfig: GraphicThemesData = {

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
