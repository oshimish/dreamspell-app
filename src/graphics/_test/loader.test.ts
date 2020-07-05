import { loadGraphics } from '../loader';
import { GraphicTheme } from "../../consts/GraphicTheme";
import { Tone, Sign, tone, sign } from 'dreamspell-math';
import * as g from 'dreamspell-math';


testTheme(GraphicTheme.Classic);
testTheme(GraphicTheme.Tzolkine);

function testTheme(theme: GraphicTheme) {

    describe(`${theme} graphic`, () => {
        let actual = loadGraphics(theme);

        //console.log(actual);

        it('loads', () => {
            expect(actual).toBeDefined();
        });

        describe('Plasmas', () => {
            const keys = Object.keys(actual.plasmas).map(k => parseInt(k) + 1);
            it('defined', () => {
                expect(actual.plasmas).toBeDefined();
                expect(keys.length).toBe(7);
                expect(keys).toContainEqual(1);
                expect(keys).toContainEqual(7);
            });

            keys.forEach(k => {
                const asset = actual.plasmas[k - 1];
                it(`-- ${k}`, () => {
                    expect(asset).toBeDefined();
                })
            });
        });
        describe('tones', () => {

            const keys = Object.keys(actual.tones).map(k => tone(parseInt(k) + 1));
            it('defined', () => {
                expect(actual.tones).toBeDefined();
                expect(keys.length).toBe(13);
                expect(keys).toContainEqual(Tone.Magnetic);
                expect(keys).toContainEqual(Tone.Cosmic);
            });

            keys.forEach(k => {
                const asset = actual.tones[k.number - 1];
                it(`-- ${k}`, () => {
                    expect(asset).toBeDefined();
                })
            });
        });



        describe('signs', () => {
            const keys = Object.keys(actual.signs).map(k => sign(parseInt(k) + 1));
            it('defined', () => {
                expect(actual.signs).toBeDefined();
                expect(keys.length).toBe(20);
                expect(keys).toContainEqual(Sign.RedDragon);
                expect(keys).toContainEqual(Sign.YellowSun);
            });

            keys.forEach(k => {
                const asset = actual.signs[k.number - 1];
                it(`-- ${k}`, () => {
                    expect(asset).toBeDefined();
                })
            });
        })

        if (theme !== GraphicTheme.Classic) {
            describe('kins', () => {
                const keys = Object.keys(actual.kins!).map(k => g.kin(parseInt(k) + 1));
                it('defined', () => {
                    expect(actual.kins).toBeDefined();
                    expect(keys.length).toBe(260);
                    expect(keys).toContainEqual(g.kin(1));
                    expect(keys).toContainEqual(g.kin(260));
                });

                keys.forEach(k => {
                    const asset = actual.kins![k.number - 1];
                    it(`-- ${k}`, () => {
                        expect(asset).toBeDefined();
                        expect(asset.active).toBeDefined();
                        expect(asset.inactive).toBeDefined();
                    })
                });
            })
        }

    });

}
