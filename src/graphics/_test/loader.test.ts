import { loadGraphics, GraphicTheme } from '../loader';


testTheme(GraphicTheme.Classic);
//testTheme(GraphicTheme.Tzolkine);

function testTheme(theme: GraphicTheme) {

    describe(`${theme} graphics`, () => {
        let actual = loadGraphics(theme);
        it('loads', () => {
            expect(actual).toBeDefined();
        });

        it('has plasmas', () => {
            expect(actual.plasmas).toBeDefined();
            const keys = Object.keys(actual.plasmas);
            expect(keys.length).toBe(7);
        });
        it('has tones', () => {
            expect(actual.tones).toBeDefined();
            const keys = Object.keys(actual.tones);
            expect(keys.length).toBe(13);
        });
        it('has signs', () => {
            expect(actual.signs).toBeDefined();
            const keys = Object.keys(actual.signs);
            expect(keys.length).toBe(20);
        });
    });

}
