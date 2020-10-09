import { initGraphics } from '../loader';
import { GraphicTheme } from "../../consts/GraphicTheme";
import { Tone, Sign, tone, sign } from 'dreamspell-math';
import * as g from 'dreamspell-math';


testTheme(GraphicTheme.Classic);
testTheme(GraphicTheme.Tzolkine);

function testTheme(theme: GraphicTheme) {

    describe(`${theme} graphic`, () => {
        let actual = initGraphics(theme);

        //console.log(actual);

        it('loads', () => {
            expect(actual).toBeDefined();
        });

        describe('Plasmas', () => {
            const keys = Array.from(Array<number>(7).keys()).map(k => k + 1);
            it('defined', () => {
                expect(actual.getPlasma).toBeDefined();
                expect(keys.length).toBe(7);
                expect(keys).toContainEqual(1);
                expect(keys).toContainEqual(7);
            });

            keys.forEach(k => {
                const asset = actual.getPlasma(k - 1);
                it(`-- ${k}`, () => {
                    expect(asset).toBeDefined();
                    expect(asset.active).toBeDefined();
                })
            });
        });
        describe('tones', () => {

            const keys = Array.from(Array<number>(13).keys()).map(k => tone(k + 1));
            it('defined', () => {
                expect(actual.getTone).toBeDefined();
                expect(keys.length).toBe(13);
                expect(keys).toContainEqual(Tone.Magnetic);
                expect(keys).toContainEqual(Tone.Cosmic);
            });

            keys.forEach(k => {
                const asset = actual.getTone(k);
                it(`-- ${k}`, () => {
                    expect(asset).toBeDefined();
                    expect(asset.active).toBeDefined();
                })
            });
        });



        describe('signs', () => {
            const keys = Array.from(Array<number>(20).keys()).map(k => sign(k + 1));
            it('defined', () => {
                expect(actual.getSign).toBeDefined();
                expect(keys.length).toBe(20);
                expect(keys).toContainEqual(Sign.RedDragon);
                expect(keys).toContainEqual(Sign.YellowSun);
            });

            keys.forEach(k => {
                const asset = actual.getSign(k);
                it(`-- ${k}`, () => {
                    expect(asset).toBeDefined();
                    expect(asset.active).toBeDefined();
                })
            });
        })

        // per kin graphics not used
        // if (theme !== GraphicTheme.Classic) {
        //     describe('kins', () => {
        //         const keys = Array.from(Array<number>(260).keys()).map(k => g.kin(k + 1));
        //         it('defined', () => {
        //             expect(actual.getKin).toBeDefined();
        //             expect(keys.length).toBe(260);
        //             expect(keys).toContainEqual(g.kin(1));
        //             expect(keys).toContainEqual(g.kin(260));
        //         });

        //         keys.forEach(k => {
        //             const asset = actual.getKin!(k);
        //             it(`-- ${k}`, () => {
        //                 expect(asset).toBeDefined();
        //                 expect(asset.active).toBeDefined();
        //                 expect(asset.inactive).toBeDefined();
        //             })
        //         });
        //     })
        // }

    });

}
