import React, { useContext } from "react";
import * as g from "dreamspell-math";
import { GraphicOptions } from "consts/GraphicTheme";
import { useKin, useGraphics, applyGraphicOptions } from "./hooks";

export const Kin = (props: {
  kin: g.Kin,
  opt?: GraphicOptions
}) => {
  const kin = useKin(props.kin, props.opt);

  if (kin.graphics.kin) {
    return (
      <div className={"kin" + (props.opt?.active && " selected")}>
        <img src={kin.graphics.kin} alt={"Kin " + props.kin.number} />
      </div>
    );
  }

  return (
    <div className={"kin" + (props.opt?.active && " selected")}>
      <SignTone kin={props.kin} />
      <Sign kin={props.kin} />
    </div>
  );
};

export const SignTone = (props: {
  kin: g.Kin,
  opt?: GraphicOptions
}) => {
  const kin = useKin(props.kin, props.opt);
  let tone = props.kin.tone;
  let num = tone.number;
  return (
    <div className={"sign-tone"}>
      <img src={kin.graphics.kin} alt={"Tone " + num} />
    </div>
  );
};

/**
 * Show Plasma graphics
 */
export const Plasma = (props: {
  plasma: number,
  opt?: GraphicOptions
}) => {

  const graphics = useGraphics();
  const gr = applyGraphicOptions(graphics.getPlasma(props.plasma - 1), props.opt);
  return (
    <div className="plasma">
      <img
        src={gr}
        alt={'Plasma ' + props.plasma}></img>
    </div>
  );
}


export const Sign = (props: {
  kin: g.Kin,
  opt?: GraphicOptions
}) => {
  const kin = useKin(props.kin, props.opt);
  return (
    <div className="sign">
      <img src={kin.graphics.sign}
        alt={"Sign " + kin.graphics.sign} />
    </div>
  );
};

export default Kin;
