//  babel macro used
import requireContext from 'require-context.macro';

function importAll(r: __WebpackModuleApi.RequireContext) {
    let images = {};
    r.keys()
        .map((item, index) => (images as any)[item.replace('./', '')] = r(item));
    return images;
}


const plasmas = (relPath: string) => importAll(requireContext('./tzolkine/plasmas', false, /\.(png|jpe?g|svg)$/));
const tones = (relPath: string) => importAll(requireContext('./tzolkine/tones', false, /\.(png|jpe?g|svg)$/));
const signs = (relPath: string) => importAll(requireContext('./classic/signs', false, /\.(png|jpe?g|svg)$/));
const kins = (relPath: string) => importAll(requireContext('./tzolkine-normal/kins', false, /\.(png|jpe?g|svg)$/));
const kinsInactive = (relPath: string) => importAll(requireContext('./tzolkine-normal/kins/inactive', false, /\.(png|jpe?g|svg)$/));

// const plasmas = importPath('./tzolkine/plasmas');
// const tones = importPath('./tzolkine/tones');
// const signs = importPath('./classic/signs');
// const kins = importPath('./tzolkine-normal/kins');
// const kinsInactive = importPath('./tzolkine-normal/kins/inactive');

// export interface IGraphics {d
//     getTone: (tone: Tone, active?: boolean) => string;
// }

export const loadGraphics = () => {
    return {
        plasmas,
        signs,
        tones,
        kins,
        kinsInactive
    }
}

