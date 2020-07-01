// Vendor
import React from "react";
import * as g from "dreamspell-math";
import { useGraphics } from "./hooks";

// Setup
export const SignTone = (props: { tone: g.Tone }) => {
  let tone = props.tone;
  let num = tone.number;
  const graphics = useGraphics();
  return (
    <div className={"sign-tone"}>
      <img src={graphics.tones![num - 1]} alt={"Tone " + num} />
    </div>
  );
};

export default SignTone;
