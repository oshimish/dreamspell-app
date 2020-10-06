export enum GraphicTheme {
    Classic = 'Classic',
    Tzolkine = 'Tzolkine'
}

// export enum GraphicTypes {
//     Plasma,
//     Tone,
//     Sign,
//     Kin
// }

/** Graphic display optons */
export type GraphicOptions = {
    active?: boolean,
    inactive?: boolean
}


export type GraphicRef = {
    active: any,
    inactive?: any
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
    }
}


