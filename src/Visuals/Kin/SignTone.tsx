// Vendor
import React from "react";
import * as g from "dreamspell-math";
import styled from "styled-components";
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

const ToneBox = styled.div``;
const ToneImage = styled.img`
  display: flex;
  margin: auto;
  height: auto;
  max-height: 100%;
  max-width: 100%;
  border-radius: 3px;
`;

// Setup
export const SignTone = (props: { tone: g.Tone }) => {
  let tone = props.tone;
  let num = tone.number;
  return (
    <ToneBox className={"sign-tone"}>
      <ToneImage src={tones["tone" + num + ".png"]} alt={"Tone " + num} />
    </ToneBox>
  );
};

export default SignTone;