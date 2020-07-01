// Vendor
import React from "react";
import * as g from "dreamspell-math";
import { useGraphics } from "./hooks";

export const Sign = (props: {
  sign: g.Sign
}) => {
  const graphics = useGraphics();
  var sign = props.sign;
  var num = sign.normilize();
  if (num === 20) {
    num = 0;
  }
  return (
    <div className="sign">
      <img src={graphics.signs![num]}
        alt={"Sign " + sign} />
    </div>
  );
};

export default Sign;
