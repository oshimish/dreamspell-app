// Vendor
import React from "react";
import * as g from "dreamspell-math";
import graphics from "graphics";

// Setup
export const SignTone = (props: { tone: g.Tone }) => {
  let tone = props.tone;
  let num = tone.number;
  return (
    <div className={"sign-tone"}>
      <img src={graphics.tones["tone" + num + ".png"]} alt={"Tone " + num} />
    </div>
  );
};

export default SignTone;
