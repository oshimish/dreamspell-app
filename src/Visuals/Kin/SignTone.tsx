// Vendor
import React from "react";
import * as g from "dreamspell-math";
import requireContext from "require-context.macro";

function importAll(r: __WebpackModuleApi.RequireContext) {
  let images = {};
  r.keys().map(
    (item, index) => ((images as any)[item.replace("./", "")] = r(item))
  );
  return images;
}

const tones = importAll(
  requireContext("./tones", false, /\.(png|jpe?g|svg)$/)
) as any;

// Setup
export const SignTone = (props: { tone: g.Tone }) => {
  let tone = props.tone;
  let num = tone.number;
  return (
    <div className={"sign-tone"}>
      <img src={tones["tone" + num + ".png"]} alt={"Tone " + num} />
    </div>
  );
};

export default SignTone;
